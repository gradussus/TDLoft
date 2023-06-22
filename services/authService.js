const { v4 } = require("uuid");

const { Employer } = require("../schemas/employersModel");

const registerUserService = async (login, password, e_name) => {
  const token = v4();
  console.log(login, password, e_name);

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

module.exports = { registerUserService };
