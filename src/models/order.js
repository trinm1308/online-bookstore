const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Order", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    items: type.ARRAY(type.INTEGER),
    totalPrice: type.FLOAT,
    orderDate: type.DATE,
    address: type.STRING,
    phone: type.STRING,
    customer: type.STRING,
    payment: type.INTEGER,
    orderStatus: type.INTEGER,
  });
}
module.exports = Model(sequelize, Sequelize);
