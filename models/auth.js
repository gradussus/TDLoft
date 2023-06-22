const { registerUserService } = require("../services/authService");

const registerUser = async (req, res) => {
  const { login, password, e_name } = req.body;

  const user = await registerUserService(login, password, e_name);
  res.json(user);
};

module.exports = {
  registerUser,
};
