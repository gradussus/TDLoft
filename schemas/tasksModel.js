const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    importance: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      required: true,
    },
    performer: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = mongoose.model("tasks", taskSchema);

module.exports = {
  Task,
};
