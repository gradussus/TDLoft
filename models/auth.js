const {
  registerUserService,
  loginUserService,
} = require("../services/authService");

const { ConflictError } = require("../helpers/errors");

const registerUser = async (req, res) => {
  const { login, password, e_name } = req.body;

  const user = await registerUserService(login, password, e_name);
  res.json(user);
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;

  const user = await loginUserService(login, password);
  if (!user) {
    console.log("asd");
    throw new ConflictError("Неправильний логін або пароль");
  }
  res.json(user);
};

module.exports = {
  registerUser,
  loginUser,
};
