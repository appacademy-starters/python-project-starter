from .db import db, col, flo, num, fk, pk, string, boo

class Seed(db.Model):
    __tablename__ = "seeds"

    id = col(num, pk = True)
    number = col(num, nullable = False)

    team = db.relationship("Team", back_populates="team")
    
