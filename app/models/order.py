from .db import db

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    doc_number = db.Column(db.String(40), nullable=False, unique=True)
    date = db.Column(db.DateTime)
    tier_level = db.Column(db.Integer, nullable=False) 
    total_amount = db.Column(db.String(255), nullable=False)
    invoice_number = db.Column(db.Integer, nullable=False) 
    po_name = db.Column(db.String(255), nullable=False) 
    route = db.Column(db.String(255), nullable=False) 
    order_Status = db.Column(db.String(255), nullable=True) 
    poJobName = db.Column(db.String(255), nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'doc_number':self.doc_number,
            'date':self.date,
            'tier_level':self.tier_level,
            'total_amount':self.total_amount,
            'invoice_number':self.invoice_number,
            'po_name':self.po_name,
            'route':self.route,
            'order_Status':self.order_Status,
            'poJobName':self.poJobName,
        }
