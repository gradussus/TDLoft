const { asyncWrapper } = require("../../helpers/apiHelper");
const express = require("express");

const { getAllTasks, addNewTask } = require("../../models/tasks.js");

const router = express.Router();

router.post("/all", asyncWrapper(getAllTasks));
router.post("/new", asyncWrapper(addNewTask));

module.exports = router;
