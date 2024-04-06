const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:040230AAKNy@cluster0.gp8jjev.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
};
