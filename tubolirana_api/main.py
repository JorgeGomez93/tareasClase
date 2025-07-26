from fastapi import FastAPI
from routers.jugadores import router as jugadores_router
from routers.ranking import router as ranking_router
app = FastAPI()

@app.get("/")
async def root():
    return {"mensaje": "API de TuBolirana está activa"}

app.include_router(jugadores_router)
app.include_router(ranking_router)
