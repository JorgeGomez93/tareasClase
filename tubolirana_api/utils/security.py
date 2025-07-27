# utils/security.py
from passlib.context import CryptContext

# Definimos el contexto para bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    """
    Dada una contraseña en texto plano, devuelve su hash usando bcrypt.
    """
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verifica que un texto plano coincida con un hash bcrypt guardado.
    """
    return pwd_context.verify(plain_password, hashed_password)
