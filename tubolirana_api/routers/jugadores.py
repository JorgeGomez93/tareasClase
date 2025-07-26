from fastapi import APIRouter, HTTPException, status, Query
from models.jugador import JugadorIn, JugadorDB, JugadorUpdate
from db.client import db
from bson import ObjectId
from typing import Optional

router = APIRouter(prefix="/jugadores", tags=["Jugadores"])


@router.post("/", status_code=status.HTTP_201_CREATED)
async def crear_jugador(jugador: JugadorIn):
    # Verificar si ya existe el email o username
    existe = await db.jugadores.find_one(
        {"$or": [{"email": jugador.email}, {"username": jugador.username}]}
    )
    if existe:
        raise HTTPException(status_code=400, detail="Email o username ya registrado")

    # Convertir a diccionario y guardar
    jugador_dict = jugador.model_dump()
    resultado = await db.jugadores.insert_one(jugador_dict)
    jugador_guardado = await db.jugadores.find_one({"_id": resultado.inserted_id})

    # Devolver el jugador guardado sin la contraseña
    jugador_guardado["_id"] = str(jugador_guardado["_id"])
    jugador_guardado.pop("password")

    return jugador_guardado


@router.get("/")
async def listar_jugadores(username: Optional[str] = Query(None, description="Filtrar por username")):
    if username:
        jugadores = await db.jugadores.find({"username": {"$regex": f"^{username}$", "$options": "i"}}).to_list(10)
    else:
        jugadores = await db.jugadores.find().to_list(100)

    for jugador in jugadores:
        jugador["_id"] = str(jugador["_id"])
        jugador.pop("password", None)

    return jugadores


@router.get("/{id}")
async def obtener_jugador_por_id(id: str):
    # Validar si el ID es un ObjectId válido
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="ID inválido")

    jugador = await db.jugadores.find_one({"_id": ObjectId(id)})

    if not jugador:
        raise HTTPException(status_code=404, detail="Jugador no encontrado")
    
    jugador["_id"] = str(jugador["_id"])
    jugador.pop("password", None)  # Oculta la contraseña
    return jugador

@router.put("/{id}")
async def actualizar_jugador(id: str, datos: JugadorUpdate):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="ID inválido")

    jugador_actual = await db.jugadores.find_one({"_id": ObjectId(id)})
    if not jugador_actual:
        raise HTTPException(status_code=404, detail="Jugador no encontrado")

    update_data = {k: v for k, v in datos.model_dump().items() if v is not None}

    # Validar duplicados (si se cambia el username o email)
    if "email" in update_data or "username" in update_data:
        filtros = []
        if "email" in update_data:
            filtros.append({"email": update_data["email"]})
        if "username" in update_data:
            filtros.append({"username": update_data["username"]})

        jugador_existente = await db.jugadores.find_one({
            "$or": filtros,
            "_id": {"$ne": ObjectId(id)}  # Solo si es otro jugador
        })

        if jugador_existente:
            raise HTTPException(status_code=400, detail="Email o username ya están en uso por otro jugador")

    if update_data:
        await db.jugadores.update_one({"_id": ObjectId(id)}, {"$set": update_data})
        jugador_actualizado = await db.jugadores.find_one({"_id": ObjectId(id)})
        jugador_actualizado["_id"] = str(jugador_actualizado["_id"])
        jugador_actualizado.pop("password", None)
        return jugador_actualizado
    else:
        raise HTTPException(status_code=400, detail="No se proporcionaron campos para actualizar")

@router.delete("/{id}", status_code=204)
async def eliminar_jugador(id: str):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="ID inválido")

    resultado = await db.jugadores.delete_one({"_id": ObjectId(id)})

    if resultado.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Jugador no encontrado")

    # No se devuelve nada, solo código 204 (No Content)
    return {"mensaje": "Jugador Eliminado"}
