from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

class Signup(BaseModel):
    username: str
    password: str

class Piece:
    def __init__(self, category, color, size, manufacturer):
        self.category = category
        self.color = color
        self.size = size
        self.manufacturer = manufacturer
        self.worn_dates = []
        self.buying_info = None
        self.care_instructions = ""
        self.tag = ""
        self.notes = ""

    def wear(self, date):
        self.worn_dates.append(date)

    def add_buying_info(self, price, buy_date, shop):
        self.buying_info = {
            "price": price,
            "buy_date": buy_date,
            "shop": shop
        }

class PieceType(BaseModel):
	category: str
	color: str
	size: str
	manufacturer: str

@app.get('/')
def read_root():
	return {'App is': 'running'}

@app.post('/additem/create')
async def create_Piece(piece: PieceType):
	return 


@app.get("/clth/{id}")
async def get_clth(id:int):
	return id

@app.post('/signin')
async def login(user: Signup):
	if user.password == 'Test123!':
		return 'OK'
	return 'REJECT',401