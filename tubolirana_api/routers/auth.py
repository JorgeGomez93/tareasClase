from pydantic import BaseModel, EmailStr, Field
from fastapi import APIRouter, HTTPException, status
from db.client import db
from utils.security import verify_password
from bson import ObjectId

router = APIRouter(prefix="/auth", tags=["auth"])


class LoginIn(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6)

class LoginOut(BaseModel):
    id: str
    username: str
    avatar: dict | None = None


@router.post("/login", response_model=LoginOut)
async def login(data: LoginIn):
    # 1) Buscar usuario por email
    user = await db.jugadores.find_one({"email": data.email})
    # 2) Verificar existencia y contraseña
    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email o contraseña inválidos"
        )
    # 3) Devolver datos limpios
    return LoginOut(
        id=str(user["_id"]),
        username=user["username"],
        avatar=user.get("avatar")
    )
