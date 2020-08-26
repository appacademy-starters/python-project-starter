import os
from flask import Flask, render_template, request, session
from starter_app.models import db, User

from starter_app.config import Config

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)

@app.route('/', methods=["GET"])
def tweet():
  tweets = Tweet.query.all()
  tweet_form = TweetForm()
  return render_template('tweet.html', tweet_form=tweet_form, tweets=tweets)