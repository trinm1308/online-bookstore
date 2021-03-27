const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Order = require("../../../models/order");
const Service = require("../../../common/service");

class OrderService extends Service {
  
}

module.exports = new OrderService(Order);
