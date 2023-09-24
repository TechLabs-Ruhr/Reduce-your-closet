from sqlalchemy.orm import Session
from . import models, schemas

def get_piece(db: Session, id: int):
	return db.query(models.Piece).filter(models.Piece.id == id).first()

def get_piece_all(db: Session):
    return db.query(models.Piece).all()

def get_by_category(db: Session, category: str):
	return db.query(models.Piece).filter(models.Piece.category == category)

def create_piece(db: Session, piece: schemas.PieceCreate):
	db_piece = models.Piece(**piece.dict())
	db.add(db_piece)
	db.commit()
	db.refresh(db_piece)
	return db_piece

def update_clothes(db: Session, piece: schemas.Piece, id: int):
    db_piece = db.query(models.Piece).filter(models.Piece.id == id).first()

    if db_piece:
        for key, value in piece.dict().items():
            setattr(db_piece, key,value)

        db.commit()
        db.refresh(db_piece)
    return db_piece

def delete_clothes(db: Session, id: int):
    
    db_piece = db.query(models.Piece).filter(models.Piece.id == id).first()

    if db_piece:
        db.delete(db_piece)
        db.commit()
        return "Piece deleted successfully"
    else:
        return "Piece not found"

def add_date(db:Session, cloth_id: int, timestamp: str):
    db_worndates = models.DebugTable(cloth_id = cloth_id, timestamp = timestamp)
    db.add(db_worndates)
    db.commit()
    db.refresh(db_worndates)
    return db_worndates

def get_dates_by_id(db: Session, id: int):
    return db.query(models.DebugTable).filter(models.DebugTable.cloth_id == id).all()