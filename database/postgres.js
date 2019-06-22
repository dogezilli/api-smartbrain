const knex = require("knex");

const db = knex({
  client: "pg",
  connection: process.env.POSTGRES_URI
  // connection: {
  //   host: process.env.POSTGRES_HOST,
  //   user: process.env.POSTGRES_USER,
  //   password: process.env.POSTGRES_PASSWORD,
  //   database: process.env.POSTGRES_DATABASE
  // }
});

module.exports = {
  db
};
