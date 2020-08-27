from flask import Blueprint, jsonify
from starter_app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  users = dict()
  for user in response:  users[user.id] = user.to_dict() 
  return { "users": users }