const {
  listEmployersService,
  listUnauthEmployersService,
  listAuthEmployersService,
} = require("../services/employersService");

const listEmployers = async (req, res) => {
  const employers = await listEmployersService();
  res.json(employers);
};

const listUnauthEmployers = async (req, res) => {
  const employers = await listUnauthEmployersService();
  res.json(employers);
};

const listAuthEmployers = async (req, res) => {
  const employers = await listAuthEmployersService();
  res.json(employers);
};

module.exports = {
  listEmployers,
  listUnauthEmployers,
  listAuthEmployers,
};
