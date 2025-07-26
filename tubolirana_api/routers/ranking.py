from fastapi import APIRouter
from db.client import db
from typing import Optional

router = APIRouter(prefix="/ranking", tags=["ranking"])

@router.get("/")
async def obtener_ranking(limit: int = 10):
    jugadores = await db.jugadores.find(
        {"puntuacion_total": {"$exists": True}}
    ).sort("puntuacion_total", -1).limit(limit).to_list(length=limit)

    ranking = []
    for i, jugador in enumerate(jugadores, start=1):
        ranking.append({
            "posicion": i,
            "username": jugador.get("username"),
            "puntuacion_total": jugador.get("puntuacion_total", 0),
            "avatar": jugador.get("avatar", {}).get("imagen")
        })

    return ranking
