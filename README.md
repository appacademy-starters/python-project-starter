# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch):

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies:

   ```bash
   pipenv install
   ```

3. Create a **.env** file based on the example with proper settings for your development environment.

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file.

5. Get into your pipenv:

   ```bash
   pipenv shell
   ```

6. Create the initial file structure and first migration file:
   - **IMPORTANT BEFORE STARTING THIS STEP**:
      - only **ONE** group member should do this on a seprate branch **BEFORE** anyone else sets up their database
  
   - Initialize alembic(creates migration folder in `app/migrations`):

   ```bash
   flask db init
   ```

   - Create your first migration file with the name "Initial migration":

   ```bash
   flask db migrate -m "initial migration"
   ```

   - **IMPORTANT AFTER THIS STEP**:
      - Whoever setup the migrations, push the branch, create a pull request and merge it to main on GitHub

7. Everyone in the group should pull down the main branch with the migration files and setup their local database:

   - Runs any migration files in the versions folder that have not been run on your local database

   ```bash
   flask db upgrade
   ```

   - Run all seed functions against local database

      ```bash
      flask seed all
      ```

8. Start your flask app:

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md)
   inside the `react-app` directory.

## Deploy to Heroku

1. Create a new project on Heroku.

2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)

4. Navigate to the client directory and build your react app locally:
   - **Make sure to do this every time you make changes to your react app**

   ```bash
   cd app/client
   npm run build
   ```

5. Run:

   ```bash
   heroku login
   ```

6. Run:

   ```bash
   heroku git:remote -a <NAME-OF-HEROKU-APP>
   git push heroku <LOCAL-BRANCH-TO-PUSH>:main
   ```

7. set up your database:

   ```bash
   heroku run -a <NAME-OF-HEROKU-APP> flask db upgrade
   heroku run -a <NAME-OF-HEROKU-APP> flask seed all
   ```

8. Setup Heroku environment variables:
   - Under Settings in your heroku dashboard find "Config Vars"
   - Add the below keys as well as any additional secret key/value pairs you have in your **.env**

   ```bash
   SECRET_KEY=<YOUR_SECRET_KEY>
   FLASK_ENV=PRODUCTION
   SQLALCHEMY_ECHO=True
   ```

9. profit!
