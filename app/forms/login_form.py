from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def passwordMatches(form, field):
    print("Checking password", field.data)
    email = form.data['email']
    password = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("User doesn't exist")
    if not user.check_password(password):
        raise ValidationError("Password Incorrect.")


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found.")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), passwordMatches])

