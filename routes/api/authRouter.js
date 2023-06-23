const { asyncWrapper } = require("../../helpers/apiHelper");
const express = require("express");

const { registerUser } = require("../../models/auth.js");
const { loginUser } = require("../../models/auth.js");

const router = express.Router();

router.post("/register", asyncWrapper(registerUser));
router.post("/login", asyncWrapper(loginUser));

module.exports = router;
