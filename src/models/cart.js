const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
function Model(sequelize, type) {
  return sequelize.define("Cart", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer: type.STRING,
    items: type.ARRAY(type.INTEGER),
  });
}
module.exports = Model(sequelize, Sequelize);
