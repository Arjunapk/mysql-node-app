const connection = require("../server");

class Todo {
  constructor() {
    this.connection = connection;
  }
  //Get All Todo
  getAllTodo() {
    try {
      const sqlQuery = "SELECT * FROM todolist";
      console.log(sqlQuery);
      this.connection.query(sqlQuery, (err, res) => {
        if (err) {
          console.log(err);
          // throw err;
        }
        console.log(res);
        return res;
      });
    } catch (error) {
      console.log(`DB Error: ${error}`);
    }
  }

  //Get Todo
  getTodo(id) {
    const sqlQuery = `SELECT * FROM todolist WHERE id = ${id}`;
    this.connection.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      return res;
    });
  }
}

module.exports = Todo;
