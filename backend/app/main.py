from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from app.db_sqlite import SessionLocal, engine, get_db

# mongoDB headers
# from fastapi.middleware.cors import CORSMiddleware
# from crud import get_clothes, add_clothes, update_clothes, delete_clothes

# app.add_middleware(
# 	CORSMiddleware,
# 	allow_origins=origins,
# 	allow_credentials = True,
# 	allow_methods = ["*"],
# 	allow_headers = ["*"],
# )

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

# set origin to prevent security breaches - change on deployment!
origins = ['http://localhost:5173']

# Routes
## root node
@app.get('/')
def read_root():
	return {'App is': 'running'}

@app.post('/additem/create')
async def create_piece(piece: schemas.Piece, db: Session = Depends(get_db)):
	return crud.create_piece(db = db, piece = piece)

@app.get("/clth/{id}")
async def get_clth(id:int, db: Session = Depends(get_db)):
	return crud.get_piece(db = db, id = id)

# Legacy Routes ----------------------------------------------
# @app.get('/get_clothes')
# async def getClothes(user: Signup):
#  if user.password == 'Test123':
#   return get_clothes(user)

# @app.post('/add_cloth')
# async def addClothes(user: Signup, cloth:Piece)
#  if user.password == 'Test123':
#   return add_clothes(user, cloth)

@app.put('/update_piece/{piece_id}')
async def updateClothes(db: Session = Depends(get_db), piece: schemas.Piece):
 return update_clothes(db, piece)

@app.delete('/delete_piece/{piece_id}')
async def deleteClothes(db: Session = Depends(get_db), piece : schemas.Piece)
 return delete_clothes(db, piece)

# # Not necessary in MVP!
# @app.post('/signin')
# async def login(user: Signup):
# 	if user.password == 'Test123!':
# 		return 'OK'
# 	return 'REJECT',401