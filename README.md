<p align="center">
  <img align="center" src="https://miro.medium.com/max/4540/1*q9ww_u32hhpMaA-Q_s1ujw.png" width="300" />
</p>

<h1 align="center">🗃NodeJS Challenge</h1>
<p>This is my first NodeJS server and a code challenge from a class in Rocketseat's Bootcamp. The challenge involves creating a REST API server from scratch using express. <a href="#description" >Read Description</a></p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-project-api/express.svg" >
  <img src="https://img.shields.io/github/license/yarapolana/nodejs-project-api" >
  <a href="https://yarapolana.com"><img src="https://img.shields.io/badge/createdby-yarapolana-red.svg" ></a>
</p>

<h2>🚀Description </h2>
<p id="description">
  Build a node server from scratch using <a href="https://expressjs.com"> Express</a> and <a href="https://nodemon.io/">Nodemon</a>. 
</p>

### Routes
- `POST /projects`: This route creates a new project and must receive `id` and `title` in the body. The result will be a json response in the following format: `{ id: "1", title: 'Novo projeto', tasks: [] }`.

- `GET /projects`: This route will list all projects with their respective tasks.

- `PUT /projects/:id`: This route receives `id` as a parameter and allows user to update only the project's title.

- `DELETE /projects/:id`: This route receives `id` as a parameter and allows user to delete the project and respective tasks.

- `POST /projects/:id/tasks`: This route receives `id` as a parameter to identify a specific project, and allows user to creat a new array of tasks.

### Middlewares

- Create a middleware that validates if a project with a specific ID exists. This middleware is to be used only on the routes that receive `id` of the project as a parameter. Return an error if the project does not exist, otherwise, allow the request to function as normal.

- Create a global middleware that intercepts all requests and prints with a (`console.log`) the amount of requests made by the application.


### Example

If route `POST /projects` is called with `{ id: 1, title: 'Novo projeto' }` as body and route `POST /projects/1/tasks` with `{ title: 'Nova tarefa' }`, your response should be an array of projects in the following format:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

<h2>Result</h2>
<p>To run the application first install dependencies</p>

```
yarn or npm install
```

<p>Then run the application</p>

```
yarn dev
```

<p>Your code should be up and running here</p>

```http://localhost:3000```

---

<h4> Check out NodeJS Authentication Challenge <a href="https://github.com/yarapolana/nodejs-auth-api">here</a>.</h4>

---
### Authors:

<p>
  <a href="https://github.com/yarapolana">
    <img src="https://avatars0.githubusercontent.com/u/19730118?s=460&v=4" width="50" height="50">
  </a>
  <a href="https://dotcode.is">
    <img src="https://dotcode.is/images/logo_dark.svg" width="50" height="50">
  </a>
</p>
