const e = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../operations/user.operations");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res
      .status(201)
      .send({
        status: true,
        message: "The user registered successfully",
        data: user,
      });
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res
      .status(200)
      .send({
        status: true,
        message: "User logged in successfully",
        data: { token },
      });
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userProfile = getUser(userId);
    res
      .status(200)
      .send({
        status: true,
        message: "User profile fetched successfully",
        data: userProfile,
      });
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  profile,
};
