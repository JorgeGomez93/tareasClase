from pydantic import BaseModel, EmailStr, Field
from typing import Optional, Dict


# Este modelo representa lo que el usuario envía al registrarse
class JugadorIn(BaseModel):
    username: str = Field(
        ..., min_length=3, max_length=30, description="Apodo único del jugador"
    )
    email: EmailStr
    password: str = Field(
        ..., min_length=6, description="Contraseña segura del jugador"
    )


# Este modelo representa cómo guardamos al jugador en la base de datos (incluye avatar)
class JugadorDB(JugadorIn):
    avatar: Optional[Dict[str, str]] = (
        None  # Ejemplo: {"nombre": "Rick", "imagen": "https://..." }
    )


class JugadorUpdate(BaseModel):
    username: Optional[str] = Field(None, min_length=3, max_length=30)
    email: Optional[EmailStr] = None
    avatar: Optional[Dict[str, str]] = None

# Modelo para devolver datos del usuario de forma segura
class User(BaseModel):
    id: str
    username: str
    email: EmailStr
    avatar: Optional[Dict[str, str]] = None
