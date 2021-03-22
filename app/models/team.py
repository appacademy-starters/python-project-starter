from .db import db, col, flo, num, fk, pk, string, boo

class Team(db.Model):
    __tablename__ = "teams"

    id = col(num, pk = True)
    name  = col(string, nullable = False)
    conference = col(num, fk("conferences.id"), nullable = False)
    seed = col(num, nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "conference": self.conference,
            "seed": self.seed
        }