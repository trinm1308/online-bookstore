const { Sequelize } = require("sequelize");
const BookModel = require("../../models/book");
const AuthorModel = require("../../models/author");
const AccountModel = require("../../models/account");
const RatingModel = require("../../models/rating")
require("dotenv").config();

const host = process.env.DB_HOST;
const db = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect: "postgres",
});

const Book = BookModel(sequelize, Sequelize);
const Author = AuthorModel(sequelize, Sequelize)
const Account = AccountModel(sequelize, Sequelize)
const Rating = RatingModel(sequelize, Sequelize)

sequelize.sync().then(() => {
  console.log(`Database & Tables created!`);
});

module.exports = {
  sequelize,
  Sequelize,
  Book,
  Author,
  Account,
  Rating
};
