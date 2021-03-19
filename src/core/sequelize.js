const { Sequelize } = require("sequelize");
const BookModel = require("../models/book");
const AuthorModel = require("../models/author");

const fs = require("fs");
let CONFIG_RAW = fs.readFileSync("dbConfig.json");
let CONFIG = JSON.parse(CONFIG_RAW);

const host = CONFIG.host;
const db = CONFIG.database;
const username = CONFIG.username;
const password = CONFIG.password;

const sequelize = new Sequelize(db, username, password, {
  host: host,
  dialect: "postgres",
});

//Conncetion test works but theres some weird warning from npm
//Assume connection is established and move on
// try {
//   const test = await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

const Book = BookModel(sequelize, Sequelize);
const Author = AuthorModel(sequelize, Sequelize)

sequelize.sync().then(() => {
  console.log(`Database & Tables created!`);
});

module.exports = {
  Sequelize,
  Book,
  Author
};
