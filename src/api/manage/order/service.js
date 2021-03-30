const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Order = require("../../../models/order");
const Service = require("../../../common/service");

class OrderService extends Service {
  async getOrderByCustomer(username) {
    const result = await Order.findAll({ where: { customer: username } });
    return { status: 200, message: result };
  }
  async getOrderDetail(id) {
    const order = await Order.findByPk(id);
    const orderItems = order.getDataValue("items");
    let items = [];
    for (const item of orderItems) {
      const query = `SELECT i.id, i."productId", b.title, b.price, b.image, i.quantity 
      FROM public."Items" i 
      LEFT JOIN public."Books" b ON i."productId" = b.id
      WHERE i.id = :id`;
      const itemDetail = await sequelize.query(query, {
        replacements: { id: item },
        type: QueryTypes.SELECT,
      });
      items.push(itemDetail[0]);
    }
    order.setDataValue("items", items);
    return { status: 200, message: order };
  }
}

module.exports = new OrderService(Order);
