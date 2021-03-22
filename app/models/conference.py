from .db import db, col, flo, num, fk, pk, string, boo

class Conference(db.model):
    __tablename__ = "conferences"

    id = col(num, pk = True)
    name = col(string, nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }