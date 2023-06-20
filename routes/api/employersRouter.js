const { asyncWrapper } = require("../../helpers/apiHelper");
const express = require("express");
const { listEmployers } = require("../../models/employers.js");

const router = express.Router();

router.get("/", asyncWrapper(listEmployers));

module.exports = router;
