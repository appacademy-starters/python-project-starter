import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from starter_app.models import db, User
from starter_app.api.user_routes import user_routes

from starter_app.config import Config

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
CORS(app)
db.init_app(app)

@app.route('/', methods=["GET"])
def test():
  return f'this is a test route'