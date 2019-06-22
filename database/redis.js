const redis = require("redis");

// Setup Redis
const redisClient = redis.createClient(process.env.REDIS_URI);

module.exports = {
  redisClient
};
