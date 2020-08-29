# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository
2. Install dependencies (`pipenv install --python=python3`)
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges

5. Run
   * `pipenv run database.py`
   * `pipenv run flask run`

To run the React Client application, checkout the readme inside the client directory.


## Deploy to Heroku

1. Create a new project
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run `$ heroku login`
5. Login to the heroku container registry `$ heroku container:login`
6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.  This should be the full URL of your react app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku (this will build the dockerfile, and push) `$ heroku container:push web -a {NAME_OF_HEROKU_APP}`
8. Release your docker container to heroku `$ heroku container:release web -a {NAME_OF_HEROKU_APP}`
9. set up your database:
```bash
    $ heroku run python -m database
```
10. profit