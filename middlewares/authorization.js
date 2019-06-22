const redisClient = require("../database/redis").redisClient;

const requireAuth = (req, res, next) => {
  const authorization = req.headers.authorization.replace("Bearer ", "");
  if (!authorization) {
    return res.status(401).json("Unauthorized");
  } else {
    return redisClient.get(authorization, (err, reply) => {
      if (err || !reply) {
        return res.status(401).json("Unauthorized");
      }
      return next();
    });
  }
};

module.exports = {
  requireAuth
};
