const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Order = require("../../../models/order");
const Service = require("../../../common/service");

class OrderService extends Service {
  async getOrderByCustomer(username) {
    const result = await Order.findAll({ where: { customer: username } });
    return { status: 200, message: result };
  }
}

module.exports = new OrderService(Order);
