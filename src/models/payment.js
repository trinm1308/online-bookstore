const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Payment", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer: type.STRING,
    paymentMethod: type.STRING,
  });
}
module.exports = Model(sequelize, Sequelize);