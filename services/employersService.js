const { Employer } = require("../schemas/employersModel");

const listEmployersService = async () => {
  const employers = await Employer.find({});
  return employers;
};

const listUnauthEmployersService = async () => {
  const employers = await Employer.find({ register: false }).select({
    name: 1,
    position: 1,
    _id: 0,
  });
  return employers;
};

const listAuthEmployersService = async () => {
  const employers = await Employer.find({ register: true }).select({
    name: 1,
    position: 1,
    _id: 0,
  });
  return employers;
};

module.exports = {
  listEmployersService,
  listUnauthEmployersService,
  listAuthEmployersService,
};
