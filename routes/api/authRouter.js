const { asyncWrapper } = require("../../helpers/apiHelper");
const express = require("express");
const { registerUser } = require("../../models/auth.js");

const router = express.Router();

router.post("/register", asyncWrapper(registerUser));

module.exports = router;
