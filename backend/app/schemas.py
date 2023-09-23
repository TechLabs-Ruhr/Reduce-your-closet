# A "schema" is a definition or description of something. Not the code that implements it, but just an abstract description used to check typing
from pydantic import BaseModel
from enum import Enum
#from datetime import date, datetime, time, timedelta

class Category(str, Enum):
    top = 'top'
    bottom = 'bottom'
    shirt = 'shirt'
    longsleeve = 'longsleeve'
    jacket = 'jacket'
    short = 'short'
    skirt = 'skirt'
    dress = 'dress'
    pants = 'pants'
    shoes = 'shoes'
    bag = 'bag'
    accesorie = 'accesorie'
    outwear = 'outwear'

class Colors(str, Enum):
    black = 'black'
    white = 'white'
    grey = 'grey'
    beige = 'beige'
    brown = 'brown'
    yellow = 'yellow'
    orange = 'orange'
    mustard = 'mustard'
    red = 'red'
    pink = 'pink'
    lightpink = 'lightpink'
    violet = 'violet'
    green = 'green'
    bottlegreen = 'bottlegreen'
    lightgreen = 'lightgreen'
    colorful = 'colorful'
    mint = 'mint'
    blue = 'blue'
    lightblue = 'lightblue'

# class Size(str, Enum):
#     xxs = 'xxs'
#     xs = 'xs'
#     s = 's'
#     m = 'm'
#     l = 'l'
#     xl = 'xl'
#     xxl = 'xxl'


class PieceBase(BaseModel):
    category: Category
    price: float
    color: Colors
    size: str
    brand: str
    #worn: list[datetime]
    #worn dates - list
    #buying info - text
    #care instructions
    #tag
    notes: str

    class Config:
    	orm_mode = True

class PiceCreate(PieceBase):
    pass

class Piece(PieceBase):
    id: int