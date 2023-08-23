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

@app.get('/')
def read_root():
	return {'App is': 'running'}


@app.get("/clth/{id}")
async def get_clth(id:int):
	return id

@app.post('/signin')
async def login(user: Signup):
	if user.password == 'Test123!':
		return 'OK'
	return 'REJECT',401