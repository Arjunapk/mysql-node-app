const Todo = require("../models/todoModel");
const connection = require("../server");

exports.getAllTodo = (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM todolist";
    const todos = connection.query(sqlQuery).then((item, res) => {
      console.log(res);
    });
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: { todos },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getTodo = (req, res) => {
  try {
    const todo = Todo.getTodo(req.params.id);

    res.status(400).json({
      status: "success",
      data: { todo },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
