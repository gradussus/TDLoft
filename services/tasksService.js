const { Task } = require("../schemas/tasksModel");

const getAllTasksService = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const addNewTaskService = async (
  title,
  description,
  importance,
  dueDate,
  author,
  performer
) => {
  const task = new Task({
    title,
    description,
    importance,
    dueDate,
    author,
    performer,
  });
  await task.save();
};

module.exports = {
  getAllTasksService,
  addNewTaskService,
};
