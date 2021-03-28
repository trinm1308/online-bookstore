const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Item = require("../../../models/item");
const Service = require("../../../common/service");

class ItemService extends Service {
  async getItemsByCustomer(username) {
    const result = await Item.findAll({ where: { customer: username } });
    return { status: 200, message: result };
  }
}

module.exports = new ItemService(Item);
