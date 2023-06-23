const {
  getAllTasksService,
  addNewTaskService,
} = require("../services/tasksService");

// const { ConflictError } = require("../helpers/errors");

const getAllTasks = async (req, res) => {
  const { login, password, e_name } = req.body;

  const user = await getAllTasksService(login, password, e_name);
  res.json(user);
};

const addNewTask = async (req, res) => {
  const { title, description, importance, dueDate, author, performer } =
    req.body;
  const task = await addNewTaskService(
    title,
    description,
    importance,
    dueDate,
    author,
    performer
  );
  res.json(task);
};

module.exports = {
  getAllTasks,
  addNewTask,
};
