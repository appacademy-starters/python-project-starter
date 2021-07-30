import os

from flask import Flask, request, redirect, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes

from .seeds import seed_commands

from .config import Config

# Setup flask app and point static_folder to the react app's build directory
app = Flask(__name__, static_folder='client/build', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


# loads user instance from db into current_user variable from flask-login
@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

# configure app for Config Class
app.config.from_object(Config)

# blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')

# Setup database
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.before_request
def https_redirect():
    """
    Redirects all non-HTTPS requests to HTTPS
    """
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    """
    Attatches csrf token to all responses with a cookie
    - SECRET_KEY must be set in the config file
    """
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None, httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    """
    Serves react app and favicon
    """
    if path == 'favicon.ico':
        return send_from_directory(app.static_folder, 'favicon.ico',
                                   mimetype='image/vnd.microsoft.icon')
    return send_from_directory(app.static_folder, 'index.html')


@app.errorhandler(404)
def not_found(e):
    """
    Revert 404 to serve react app
    - Handles issue: on heroku deploy when request is made to a frontend route 
    before initial page load 404 is thrown
    """
    return send_from_directory(app.static_folder, 'index.html')
