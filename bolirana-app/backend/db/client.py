from motor.motor_asyncio import AsyncIOMotorClient
# from dotenv import load_dotenv
import os

# load_dotenv()  # Carga variables del archivo .env si existe

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URL)
db = client.tubolirana
