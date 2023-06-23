const { asyncWrapper } = require("../../helpers/apiHelper");
const express = require("express");
const {
  listEmployers,
  listUnauthEmployers,
  listAuthEmployers,
} = require("../../models/employers.js");

const router = express.Router();

router.get("/all", asyncWrapper(listEmployers));
router.get("/unauthEmployers", asyncWrapper(listUnauthEmployers));
router.get("/authEmployers", asyncWrapper(listAuthEmployers));

module.exports = router;
