const mysql = require("mysql");
const app = require("./app");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "todos",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Mysql database connected successfully!!!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running at 127.0.0.1:${port}`);
});

module.exports = connection;
