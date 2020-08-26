from flask import Blueprint
from starter_app.models import User

users = Blueprint('users', __name__)

@users.route('/')
def index():
  users = User.query.all()
  return jsonify(users)