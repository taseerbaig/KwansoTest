const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// const users = [];
// adding global level just for the sake of solution, can use mongodb here as well but it's configuration takes time
let user = {};
let tasks = [];

// cors
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes //
require("./routes/register")(app, user);
require("./routes/login")(app, user);
require("./routes/user")(app, user);
require("./routes/createTasks")(app, tasks);
require("./routes/listTasks")(app, tasks);

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
