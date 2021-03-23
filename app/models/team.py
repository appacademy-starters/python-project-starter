from .db import db, col, flo, num, fk, pk, string, boo

class Team(db.Model):
    __tablename__ = "teams"

    id = col(num, pk = True)
    name  = col(string, nullable = False)
    conference_id = col(num, fk("conferences.id"), nullable = False)
    seed_id = col(num, fk("seeds.id"), nullable = False)

    conference = db.relationship("Conference", back_populates="teams")
    seed = db.relationship("Seed", back_populates="team")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "conference": self.conference,
            "seed": self.seed
        }