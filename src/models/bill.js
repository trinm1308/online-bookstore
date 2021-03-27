const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Bill", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: type.INTEGER,
    total: type.FLOAT,
    items: type.ARRAY(type.INTEGER),
  });
}
module.exports = Model(sequelize, Sequelize);
