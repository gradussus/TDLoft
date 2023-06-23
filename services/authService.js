const { v4 } = require("uuid");

const { Employer } = require("../schemas/employersModel");
const { ConflictError } = require("../helpers/errors");

const registerUserService = async (login, password, e_name) => {
  const token = v4();
  if (await Employer.findOne({ name: e_name, register: true })) {
    throw new ConflictError("Даний працівник вже зареєстрований");
  }

  const user = await Employer.findOneAndUpdate(
    { name: e_name },
    {
      login: login,
      password: password,
      register: true,
      token: token,
    },
    { new: true }
  ).select({
    token: 1,
    _id: 0,
  });
  return user;
};

const loginUserService = async (login, password) => {
  user = Employer.findOne({
    $and: [{ login: login }, { password: password }, { register: true }],
  });
  return user;
};

module.exports = { registerUserService, loginUserService };
