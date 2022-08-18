## Dev Containers (OPTIONAL for M1 Users)

**These instructions should only be followed if you are using `psycopg` or PostgresQL in development. If you are are using SQLite3 for development, these instructions will not apply to you.**

The following instructions detail an *optional* development setup for M1 Mac users, especially those having issues with the `psycopg` package and PostgresQL in their development environment.


1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed. 
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer. 
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code. 
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner. 
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).  ***You will need to make changes in the `.devcontainer/Dockerfile` if you want to use it with SQLite3 instead of Postgres, the required changes are listed in the comments in that file***  

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

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

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

