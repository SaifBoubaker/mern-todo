const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  task: String,
  isEdited: false,
});

module.exports = mongoose.model("TODO", todoSchema);
