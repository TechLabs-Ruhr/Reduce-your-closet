from sqlalchemy import Column, ARRAY, Integer, String, Float, Boolean, DateTime, Enum, ForeignKey
from sqlalchemy.orm import relationship
from enum import Enum as EnumClass
from .db_sqlite import Base

class Category(str, EnumClass):
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

class Colors(str, EnumClass):
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

# class Size(str, EnumClass):
#     xxs = 'xxs'
#     xs = 'xs'
#     s = 's'
#     m = 'm'
#     l = 'l'
#     xl = 'xl'
#     xxl = 'xxl'

class WornDates(Base):
    __tablename__ = 'worndates'
    id = Column(Integer, primary_key = True, index = True)
    cloth_id = Column(Integer)
    timestamp = Column(String)

class DebugTable(Base):
    __tablename__ = 'debugtable'
    id = Column(Integer, primary_key = True, index = True)
    cloth_id = Column(Integer)
    timestamp = Column(String)

class Piece(Base):
    __tablename__ = 'pieces3'

    id = Column(Integer, primary_key = True, index = True)
    category = Column(Enum(Category))
    price = Column(Float)
    color = Column(Enum(Colors))
    size = Column(String)
    brand = Column(String)
    cost_per_use = Column(Float)

    #worndates = relationship('WornDates')
    #worn = Column(ARRAY(DateTime))
    #worn dates - list
    #picture
    #buying info - text
    #care instructions
    #tag

    notes = Column(String)
    timesWorn = Column(Integer)
##class PieceUpdated(Base):
   # __tablename__ = 'piecesupdated2'

    #id = Column(Integer, primary_key = True, index = True)
    #category = Column(Enum(Category))
    #price = Column(Float)
    #color = Column(Enum(Colors))
    #size = Column(String)
    #brand = Column(String)
    #cost_per_use = Column(Float)

    #worndates = relationship('WornDates')
    #worn = Column(ARRAY(DateTime))
    #worn dates - list
    #picture
    #buying info - text
    #care instructions
    #tag
    #notes = Column(String)
    #timesWorn = Column(Integer)

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
