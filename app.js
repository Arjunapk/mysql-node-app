const express = require("express");
const todoRoute = require("./routes/todoRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/todos", todoRoute);

module.exports = app;
