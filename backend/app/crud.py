from sqlalchemy.orm import Session
from . import models, schemas

def get_piece(db: Session, id: int):
	return db.query(models.Piece).filter(models.Piece.id == id).first()

def get_by_category(db: Session, category: str):
	return db.query(models.Piecer).filter(modesl.Piece.category == category)

def create_piece(db: Session, piece: schemas.Piece):
	db_piece = models.Piece(**piece.dict())
	db.add(db_piece)
	db.commit()
	db.refresh(db_piece)
	return db_piece