const router = require("express").Router();

const { getTodos, getTodo, addTodo, deleteTodo, updateTodo } = require("../controllers/todos");

router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.delete("/todo/:id", deleteTodo);
router.patch("/todo/:id", updateTodo);

module.exports = router;