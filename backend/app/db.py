from motor.motor_asyncio import AsyncIOMotorClient 
  
client = AsyncIOMotorClient("mongodb://localhost:2", username="root", password="example") 
  
db = client.test 
  
collection_users = db.users
collection_clothes = db.clothes
collection_closets = db.closets
