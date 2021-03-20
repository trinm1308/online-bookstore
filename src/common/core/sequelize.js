const { Sequelize } = require("sequelize");
const BookModel = require("../../models/book");
const AuthorModel = require("../../models/author");
const AccountModel = require("../../models/account");
const RatingModel = require("../../models/rating")

const fs = require("fs");
let CONFIG_RAW = fs.readFileSync("config.json");
let CONFIG = JSON.parse(CONFIG_RAW).database;

const host = CONFIG.host;
const db = CONFIG.database;
const user = CONFIG.user;
const password = CONFIG.password;

const sequelize = new Sequelize(db, user, password, {
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
const Account = AccountModel(sequelize, Sequelize)
const Rating = RatingModel(sequelize, Sequelize)

sequelize.sync().then(() => {
  console.log(`Database & Tables created!`);
});

module.exports = {
  Sequelize,
  Book,
  Author,
  Account,
  Rating
};
