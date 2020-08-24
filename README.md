# Solo React Project

This is the backend for the Solo React project.

## Getting started

1. Clone this repository
2. Install dependencies (`npm install`)
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges

5. Run
   * `npm run db:create`
   * `npm run db:migrate`
   * `npm run db:seed:all`
   * `npm start`

## Deploy to Heroku

1. Create a new project
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run `$ heroku login`
5. Add heroku as a remote to this git repo `$ heroku git:remote -a <project_name>`
6. Push the project to heroku `$ git push heroku master`
7. Connect to the heroku shell and prepare your database

```bash
    $ heroku run bash
    $ sequelize-cli db:migrate
    $ sequelize-cli db:seed:all
```
(You can interact with your database this way as youd like, but beware that `db:drop` should not be run in the heroku environment)

8. Add a `REACT_APP_BASE_URL` config var.  This should be the full URL of your react app: i.e. "https://solo-react.herokuapp.com"

9. profit