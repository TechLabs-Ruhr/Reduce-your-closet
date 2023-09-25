from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import crud, models, schemas
from app.db_sqlite import SessionLocal, engine, get_db

# mongoDB headers
# from fastapi.middleware.cors import CORSMiddleware
# from crud import get_clothes, add_clothes, update_clothes, delete_clothes

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

# set origin to prevent security breaches - change on deployment!
origins = ['http://localhost:5173']
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials = True,
allow_methods = ["*"],
allow_headers = ["*"],
)

# Routes
## root node
@app.get('/')
def read_root():
	return {'App is': 'running'}

@app.post('/additem/create')
async def create_piece(piece: schemas.PieceCreate, db: Session = Depends(get_db)):
	return crud.create_piece(db = db, piece = piece)

@app.get('/clth/all')
async def get_pieces(db: Session = Depends(get_db)):
	return crud.get_piece_all(db = db)

@app.get("/clth/{id}")
async def get_clth(id:int, db: Session = Depends(get_db)):
	return crud.get_piece(db = db, id = id)

@app.put('/update_piece/{piece_id}')
async def updateClothes(piece_id: int, piece: schemas.PieceBase, db: Session = Depends(get_db)):
 	return crud.update_clothes(db, piece, piece_id)

@app.delete('/delete_piece/{piece_id}')
async def deleteClothes(piece_id: int, db: Session = Depends(get_db)):
 	return crud.delete_clothes(db, piece_id)

@app.post('/clth/{cloth_id}/{timestamp}/adddate')
async def add_date(cloth_id: int, timestamp: str, db: Session = Depends(get_db)):
	return crud.add_date(db = db, cloth_id = cloth_id, timestamp = timestamp)

@app.get('/clth/{cloth_id}/getdate')
async def get_dates_by_id(cloth_id: int, db: Session = Depends(get_db)):
	return crud.get_dates_by_id(id = cloth_id, db = db)

# Legacy Routes ----------------------------------------------
# @app.get('/get_clothes')
# async def getClothes(user: Signup):
#  if user.password == 'Test123':
#   return get_clothes(user)

# @app.post('/add_cloth')
# async def addClothes(user: Signup, cloth:Piece)
#  if user.password == 'Test123':
#   return add_clothes(user, cloth)



# # Not necessary in MVP!
# @app.post('/signin')
# async def login(user: Signup):
# 	if user.password == 'Test123!':
# 		return 'OK'
# 	return 'REJECT',401