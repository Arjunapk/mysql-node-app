const mysql = require("mysql");
const app = require("./app");

const con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Mysql database connected");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running at 127.0.0.1:${port}`);
});
