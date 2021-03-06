const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Item", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: type.INTEGER,
    customer: type.STRING,
    quantity: type.INTEGER,
    status: { type: type.INTEGER, defaultValue: 0 },
  });
}
module.exports = Model(sequelize, Sequelize);
