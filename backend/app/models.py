from enum import Enum

class Category(Enum):
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

class Colors(Enum):
    black = 'black'
    white = 'white'
    red = 'red'
    yellow = 'yellow'
    orange = 'orange'
    green = 'green'
    blue = 'blue'
    pink = 'pink'
    brown = 'brown'
    # I guess there are a lot of colors to add here :D:D feel free to come up with them (don't forget to also add within schemas.py)

class Size(Enum):
    xxs = 'xxs'
    xs = 'xs'
    s = 's'
    m = 'm'
    l = 'l'
    xl = 'xl'
    xxl = 'xxl'

class Piece(BaseModel):
    id = Column(Integer, primary_key = True)
    category = Column(Enum(Category))
    price = Column(Float)
    color = Column(Enum(Colors))
    size = Column(Enum(Size))
    brand = Colum(String)
    #worn dates - list
    #buying info - text
    #care instructions
    #tag
    notes = Column(String)

    # def __init__(self, category, color, size, brand):
    #     self.category = category
    #     self.color = color
    #     self.size = size
    #     self.brand = brand
    #     self.worn_dates = []
    #     self.buying_info = None
    #     self.care_instructions = ""
    #     self.tag = ""
    #     self.notes = ""

    # def wear(self, date):
    #     self.worn_dates.append(date)

    # def add_buying_info(self, price, buy_date, shop):
    #     self.buying_info = {
    #         "price": price,
    #         "buy_date": buy_date,
    #         "shop": shop
    #     }

class Signup(BaseModel):
    username: str
    password: str
