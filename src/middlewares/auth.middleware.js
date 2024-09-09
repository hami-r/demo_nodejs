const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/jwt.utils");

const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(401).send({ status: false, message: "Token is not provided" });
    }
    const decodedToken = verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).send({ status: false, message: "Invalid token" });
  }
};

const authorizeUser = (req, res, next) => {
  try {
    const user = req.user;
    const userId = parseInt(req.params.id);
    if (user.id !== userId) {
      throw new Error("Unauthorized acess");
    }
    next();
  } catch (error) {
    res.status(403).send({ status: false, message: "Unauthorized access" });
  }
};

module.exports = {
  authenticateToken,
  authorizeUser,
};
