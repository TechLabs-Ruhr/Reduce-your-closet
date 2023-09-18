# A "schema" is a definition or description of something. Not the code that implements it, but just an abstract description used to check typing
from pydantic import BaseModel
from enum import Enum

class Category(str, Enum):
    top = 'top'
    shirt = 'shirt'
    longsleeve = 'longsleeve'
    jacket = 'jacket'
    short = 'short'
    skirt = 'skirt'
    dress = 'dress'
    pants = 'pants'
    shoes = 'shoes'
    bag = 'bag'
    accesoires = 'accesoires'

class Colors(str, Enum):
    black = 'black'
    white = 'white'
    red = 'red'
    yellow = 'yellow'
    orange = 'orange'
    green = 'green'
    blue = 'blue'
    pink = 'pink'
    brown = 'brown'
    # I guess there are a lot of colors to add here :D:D feel free to come up with them (don't forget to also add within models.py)

class Size(str, Enum):
    xxs = 'xxs'
    xs = 'xs'
    s = 's'
    m = 'm'
    l = 'l'
    xl = 'xl'
    xxl = 'xxl'

class Piece(BaseModel):
    id: int
    category: Category
    price: float
    color: Colors
    size: Size
    brand: str
    #worn dates - list
    #buying info - text
    #care instructions
    #tag
    notes: str

    class Config:
    	orm_mode = True