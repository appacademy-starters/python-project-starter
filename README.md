# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

   ```bash
   pipenv install
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches
   your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your
   flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md)
   inside the `react-app` directory.

## Deploy to Heroku

1. Create a new project on Heroku

2. Under Resources click "Find more add-ons" and add the add on called
   "Heroku Postgres"

3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)

4. Run:

   ```bash
   heroku login
   ```

5. Run:

   ```bash
   heroku git:remote -a <NAME-OF-HEROKU-APP>
   git push heroku <LOCAL-BRANCH-TO-PUSH>:main
   ```

6. set up your database

   ```bash
   heroku run -a <NAME-OF-HEROKU-APP> flask db upgrade
   heroku run -a <NAME-OF-HEROKU-APP> flask seed all
   ```

7. Under Settings in your heroku dashboard find "Config Vars" and add these keys
   as well as any additional secret key/value pairs you have in your **.env**:

   ```bash
   SECRET_KEY=<YOUR_SECRET_KEY>
   FLASK_ENV=PRODUCTION
   SQLALCHEMY_ECHO=True
   ```

8. profit
