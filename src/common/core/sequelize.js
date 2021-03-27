const { Sequelize } = require("sequelize");
require("dotenv").config();

const host = process.env.DB_HOST;
const db = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect: "postgres",
});

sequelize.sync({ alter: true }).then(() => {
  console.log(`Database & Tables created!`);
});

module.exports = { sequelize };
