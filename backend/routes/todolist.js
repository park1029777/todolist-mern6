const express = require("express");

const Todo = require("../models/todolist");
const router = express.Router();

// POST todo
// create todo
router.post("/", async (req, res) => {
  try {
    const newTodo = await Todo.create({ title: req.body.title });
    req.body.title;
    res.send(newTodo);
  } catch (error) {
    console.error(error);
  }
});

// GET todo
// Read todos

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.error(error);
  }
});
// GET todo/:id
// GET todo/:title
// Read todo
router.get("/:title", async (req, res) => {
  try {
    // const todo = await Todo.findById(req.params.id);
    const todo = await Todo.findOne({ title: req.params.title });
    res.send(todo);
  } catch (error) {
    console.error(error);
  }
});

// PATCH todo/:id
// Update todo

router.patch("/:id", async (req, res) => {
  try {
    await Todo.findOneAndUpdate(req.params.id, {
      title: req.body.title,
    });
    const updateTodo = await Todo.findOneAndUpdate(req.params.id);
    res.send(updateTodo);
  } catch (error) {
    console.error(error);
  }
});

// DELETE todo/:id
// Delete todo

router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
