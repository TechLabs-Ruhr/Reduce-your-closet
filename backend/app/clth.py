import pandas as pd
import numpy as np

class Piece:
    def __init__(self, piece_type, color, size, manufacturer):
        self.piece_type = piece_type
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

class Outfit:
    def __init__(self, pieces):
        self.pieces = pieces

    def add_piece(self, piece):
        self.pieces.append(piece)

class Wardrobe:
    def __init__(self):
        self.pieces = []

    def add_piece(self, piece):
        self.pieces.append(piece)

# Create some pieces as an example
shirt = Piece("Shirt", "Blue", "M", "BrandX")
shirt.add_buying_info(25, "2023-05-15", "Fashion Store")
shirt.wear("2023-05-20")

pants = Piece("Pants", "Black", "L", "BrandY")
pants.add_buying_info(40, "2023-05-10", "Clothing Shop")
pants.wear("2023-05-18")

# Create an outfit as an example
outfit = Outfit([shirt, pants])

# Create a wardrobe
wardrobe = Wardrobe()
wardrobe.add_piece(shirt)
wardrobe.add_piece(pants)

# Create pandas DataFrames
pieces_data = []
for piece in wardrobe.pieces:
    pieces_data.append({
        "Type": piece.piece_type,
        "Color": piece.color,
        "Size": piece.size,
        "Manufacturer": piece.manufacturer,
        "Worn Dates": piece.worn_dates,
        "Buying Info": piece.buying_info,
        "Care Instructions": piece.care_instructions,
        "Tag": piece.tag,
        "Notes": piece.notes
    })

pieces_df = pd.DataFrame(pieces_data)

outfit_data = []
for piece in outfit.pieces:
    outfit_data.append({
        "Type": piece.piece_type,
        "Color": piece.color
    })

outfit_df = pd.DataFrame(outfit_data)

# Display DataFrames
print("Wardrobe Pieces:")
print(pieces_df)

print("\nOutfit Pieces:")
print(outfit_df)
