from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
@login_required
def orders():
    # users = User.query.all()
    # return {'users': [user.to_dict() for user in users]}
    return "Hola"

@order_routes.route('/<int:id>')
@login_required
def order(id):
    user = User.query.get(id)
    return user.to_dict()
