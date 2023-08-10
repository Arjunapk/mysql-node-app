const express = require("express");
const { getAllTodo, getTodo } = require("../controllers/todoController");

const router = express.Router();

router.route("/").get(getAllTodo);
router.route("/:id").get(getTodo);

module.exports = router;
