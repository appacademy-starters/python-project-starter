import pytest
from werkzeug.security import check_password_hash
from sqlalchemy.exc import IntegrityError, DataError

from app import app
from app.models import db, User

@pytest.fixture
def context():
    with app.app_context() as context:
        db.session.remove()
        db.drop_all()
        db.create_all()
        yield context


def test_create_valid_user(context):
    user = User(username="demo", email="demo@aa.io", password="password")
    db.session.add(user)
    db.session.commit()

    added_user = User.query.filter_by(email="demo@aa.io").first()
    assert added_user.username == "demo"
    assert added_user.email == "demo@aa.io"
    assert check_password_hash(added_user.password, 'password')
    assert check_password_hash(added_user.hashed_password, 'password')
    assert added_user.check_password('password')
    assert added_user.to_dict() == { 'id': 1, 'username': 'demo', 'email': 'demo@aa.io' }

def test_null_username(context):
    user = User(email="demo@aa.io", password="password")
    db.session.add(user)

    with pytest.raises(IntegrityError):
        db.session.commit()


def test_null_email(context):
    user = User(username="demo", password="password")
    db.session.add(user)

    with pytest.raises(IntegrityError):
        db.session.commit()

def test_null_password(context):
    user = User(username="demo", email="demo@aa.io")
    db.session.add(user)

    with pytest.raises(IntegrityError):
        db.session.commit()

def test_long_username(context):
    user = User(username="demo-demo-demo-demo-demo-demo-demo-demo-1", email="demo@aa.io", password="password")
    db.session.add(user)

    with pytest.raises(DataError):
        db.session.commit()

def test_long_email(context):
    user = User(username="demo", email="demo-demo-demo-demo-demo-demo-demo-demo-1@demo-demo.io", password="password")
    db.session.add(user)

    with pytest.raises(DataError):
        db.session.commit()

def test_unique_username(context):
    user1 = User(username="demo", email="demo1@aa.io", password="password1")
    db.session.add(user1)
    db.session.commit()

    user2 = User(username="demo", email="demo2@aa.io", password="password2")
    db.session.add(user2)
    with pytest.raises(IntegrityError) as error:
      db.session.commit()

def test_unique_email(context):
    user1 = User(username="dem1", email="demo@aa.io", password="password1")
    db.session.add(user1)
    db.session.commit()

    user2 = User(username="demo2", email="demo@aa.io", password="password2")
    db.session.add(user2)
    with pytest.raises(IntegrityError) as error:
      db.session.commit()