const { Employer } = require("../schemas/employersModel");

const listEmployersService = async () => {
  const employers = await Employer.find({});
  return employers;
};

module.exports = {
  listEmployersService,
};
