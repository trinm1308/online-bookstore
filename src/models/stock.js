const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Stock", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: type.INTEGER,
    quantity: type.INTEGER,
  });
}
module.exports = Model(sequelize, Sequelize);
