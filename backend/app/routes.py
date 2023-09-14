@app.post('/additem/create')
async def create_Piece(piece: Piece):
	return 

@app.get("/clth/{id}")
async def get_clth(id:int):
	return id

@app.get('/get_clothes')
async def getClothes(user: Signup):
 if user.password == 'Test123':
  return get_clothes(user)

@app.post('/add_cloth')
async def addClothes(user: Signup, cloth:Piece)
 if user.password == 'Test123':
  return add_clothes(user, cloth)

@app.put('/update_cloth/{cloth_id}')
async def updateClothes(user: Signup, cloth_id: string)
 if user.password == 'Test123':
  return update_clothes(user, cloth_id)

@app.delete('/delete_cloth/{cloth_id}')
async def deleteClothes(user: Signup, cloth_id: string)
 if user.password == 'Test123':
  return delete_clothes(user, cloth_id)

# Not necessary in MVP!
@app.post('/signin')
async def login(user: Signup):
	if user.password == 'Test123!':
		return 'OK'
	return 'REJECT',401