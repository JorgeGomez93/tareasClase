from pydantic import BaseModel, EmailStr, Field
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

from db.client import db
from utils.security import verify_password, create_access_token, SECRET_KEY, ALGORITHM
from models.jugador import User

router = APIRouter(prefix="/auth", tags=["auth"])

# Esquema de seguridad: le dice a FastAPI cómo obtener el token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

# --- Modelos de Datos ---
class Token(BaseModel):
    access_token: str
    token_type: str

class LoginIn(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6)

# --- Dependencia de Seguridad ---
async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="No se pudieron validar las credenciales",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = await db.jugadores.find_one({"username": username})
    if user is None:
        raise credentials_exception
    
    # Convertimos el _id de BSON a string para el modelo Pydantic
    user["id"] = str(user["_id"])
    return User(**user)


# --- Endpoints ---
@router.post("/login", response_model=Token)
async def login(data: LoginIn):
    user = await db.jugadores.find_one({"email": data.email})
    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email o contraseña inválidos",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}
