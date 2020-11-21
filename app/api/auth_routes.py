from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/')
def authenticate():
  if current_user.is_authenticated:
    return current_user.to_dict()
  return { 'errors' : 'Unauthorized' }, 401


@auth_routes.route('/login', methods=['POST'])
def login():
  form = LoginForm()
  # Get the csrf_token from the request cookie and put it into the
  # form manually to validate_on_submit can be used
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    # Add the user to the session, we are logged in!
    user = User.query.filter(User.email == form.data['email']).first()
    login_user(user)
    return user.to_dict()
  return { 'errors': form.errors }, 401

@auth_routes.route('/logout')
def logout():
  logout_user()
  return { 'message' : 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = User(
      username=form.data['username'],
      email=form.data['email'],
      password=form.data['password']
    )
    db.session.add(user)
    db.session.commit()
    return user.to_dict()
  return { 'errors': form.errors }
