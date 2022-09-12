# WeaveLines

<img alt="express-typescript" src="https://geekyants.github.io/express-typescript/public/images/express-typescript.png" height="50%" width="60%">

A boilerplate for [Node.js](https://nodejs.org/en) App.

* This boilerplate is built using [Express.js](https://expressjs.com/) web framework, and is using [Typescript Lang](https://www.typescriptlang.org/) for writing the app's logic. 
* It uses Node's [Cluster API](https://nodejs.org/api/cluster.html), this helps us to take advantage of multi-core systems & to handle the load.
* For Database - Repo contains the use of [Mongoose](https://mongoosejs.com/) (ie. [MongoDB](https://www.mongodb.com/) object modeling for [Node.js](https://nodejs.org/en/))..
* For Routing - Repo contains the use of [express-router](https://expressjs.com/en/guide/routing.html) & have distributed Routes into two files ie. Web Routes & API Routes. 
* For Route Auth Middleware - API routes are configured with [JSON Web Token](https://github.com/auth0/express-jwt).
* For Data validation Middleware - Repo contains the use of [joi](https://www.npmjs.com/package/joi)for data validation.


# Getting Started
## Step 1: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information.

Create a new database with the name you have in your `.env`-file.

## Step 2: install dependancies

Go to the project dir and install your dependancies with npm install.

```bash
npm install
```

> This will create your node_modules folder.
## Step 3: Serve your App

Go to the project dir and start your app with this npm script.

```bash
npm run dev
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the server according to these changes.


# ❯ Scripts and Tasks

All script are defined in the `package.json` file, but the most important ones are listed here.

### Install

- Install all dependencies with `npm install`

### Running in dev mode

- Run `npm run dev` to start nodemon with ts-node, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:3000`

### Building the project and run it

- Run `npm run build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `npm run start`.

# List of Routes

```sh

# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/users/login
  POST   | /api/users/register
  POST   | /api/notes/add
  GET    | /api/notes/read
  PUT    | /api/notes/invite
  POST   | /api/notes/update
+--------+-------------------------+
```