from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.jugadores import router as jugadores_router
from routers.ranking import router as ranking_router
from routers.auth import router as auth_router
from routers.users import router as users_router

app = FastAPI()

# Añadir CORS para permitir conexiones desde tu frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O puedes poner ["http://127.0.0.1:5502"] para ser más específico
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"mensaje": "API de TuBolirana está activa"}

app.include_router(jugadores_router)
app.include_router(ranking_router)
app.include_router(auth_router)
app.include_router(users_router)
