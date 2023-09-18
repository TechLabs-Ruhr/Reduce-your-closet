from sqlalchemy.orm import Session
from . import models, schemas

def get_piece(db: Session, id: int):
	return db.query(models.Piece).filter(models.Piece.id == id).first()

def get_by_category(db: Session, category: str):
	return db.query(models.Piece).filter(models.Piece.category == category)

def create_piece(db: Session, piece: schemas.PiceCreate):
	db_piece = models.Piece(**piece.dict())
	db.add(db_piece)
	db.commit()
	db.refresh(db_piece)
	return db_piece


def update_cloth(db: Session, piece: schemas.Piece):
    db_piece = db.query(models.Piece).filter(models.Piece.id == piece.id).first()

    if db_piece:
        for key, value in piece.dict().items():
            setattr(db_piece, key,value)


        db.commit()
        db.refresh(db_piece)



def delete_cloth(db: Session, piece: schemas.Piece):
    
    db_piece = db.query(models.Piece).filter(models.Piece.id == piece.id).first()

    if db_piece:
        db.delete(db_piece)
        db.commit()

        
        return "Piece deleted successfully"
    else:
        return "Piece not found"
