from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found.")


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("No such user exists.")
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
