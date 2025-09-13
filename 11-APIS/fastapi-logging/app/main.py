from fastapi import FastAPI, HTTPException
import logging, os

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO"),
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
logger = logging.getLogger("app")

app = FastAPI()

@app.get("/health")
def health():
    logger.info("health_ok")
    return {"status": "ok"}

@app.get("/hello/{name}")
def hello(name: str):
    logger.info("hello_requested name=%r", name)
    return {"message": f"Hola, {name}!"}

@app.get("/calc")
def calc(a: int, b: int):
    try:
        return {"result": a / b}
    except ZeroDivisionError:
        logger.exception("division_by_zero")
        raise HTTPException(status_code=400, detail="b no puede ser 0")
