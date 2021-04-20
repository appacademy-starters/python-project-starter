from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
col = db.Column
num = db.Integer
string = db.String
flo = db.Float
fk = db.ForeignKey
pk = primary_key
boo = db.Boolean