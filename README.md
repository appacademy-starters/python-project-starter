# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository
2. Install dependencies (`pipenv install --dev -r dev-requirements.txt --python=python3 && pipenv install -r requirements.txt`)
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges

5. Run
   * `pipenv shell`
   * `python database.py`
   * `flask run`

To run the React Client application, checkout the readme inside the client directory.


## Deploy to Heroku

1. Create a new project
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run `$ heroku login`
5. Login to the heroku container registry `$ heroku container:login`
6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.  This should be the full URL of your react app: i.e. "https://flask-react-aa.herokuapp.com"
7. CD into the root of your project, where your Dockerfile is located.
8. Push your docker container to heroku (this will build the dockerfile, and push) `$ heroku container:push web -a {NAME_OF_HEROKU_APP}`
9. Release your docker container to heroku `$ heroku container:release web -a {NAME_OF_HEROKU_APP}`
10. set up your database:
```bash
    $ heroku run -a {NAME_OF_HEROKU_APP} python -m database
```
11. Under Settings find "Config Vars" and add any additional/secret .env variables.
11. profit

IMPORTANT! If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment. You can do this by running (`pipenv lock -r > requirements.txt`)

ALSO IMPORTANT! psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux. There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
