const { listEmployersService } = require("../services/employersService");

const listEmployers = async (req, res) => {
  const employers = await listEmployersService();
  res.json(employers);
};

module.exports = {
  listEmployers,
};
