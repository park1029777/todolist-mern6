const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  contents: { type: String },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
