const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");

function Model(sequelize, type) {
  return sequelize.define("Book", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    genre: type.STRING,
    publishedDate: type.DATE,
    image: type.TEXT,
    price: type.FLOAT,
    oldPrice: type.FLOAT,
    author: type.STRING,
    publisher: type.STRING,
    description: type.TEXT,
  });
}

module.exports = Model(sequelize, Sequelize);
