import pytest

from app import app
from app.models import db

@pytest.fixture
def context():
    with app.app_context() as context:
        db.session.remove()
        db.drop_all()
        db.create_all()
        yield context


def test_assert(context):
    assert True
