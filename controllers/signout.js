const jwt = require("jsonwebtoken");
const redisClient = require("../database/redis").redisClient;

const signout = (req, res) => {
  const authorization = req.headers.authorization.replace("Bearer ", "");
  return redisClient.del(authorization, err => {
    if (err) {
      return res.status(400).json("Unauthorized");
    } else {
      return res.json("logout");
    }
  });
};

module.exports = {
  signout: signout
};
