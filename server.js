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

// connection.query("SELECT * FROM todolist", (err, res) => {
//   if (err) console.log(`DB Error: ${err}`);
//   console.log(`Results Todos: ${res}`);
// });

// const sqlQuery = "SELECT * FROM todolist";
// const todos = connection.query(sqlQuery, (err, res) => {
//   if (err) throw err;
//   console.log(res);
// });
// console.log(todos);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running at 127.0.0.1:${port}`);
});

// console.log(`Server: ${con}`);
module.exports = connection;
