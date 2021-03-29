const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Item = require("../../../models/item");
const Service = require("../../../common/service");

class ItemService extends Service {
  async getItemsByCustomer(username) {
    const query = `SELECT i.id, i."productId", b.title, b.image, b.price, b."countInStock", i.quantity
    FROM public."Items" i 
    LEFT JOIN public."Books" b ON i."productId" = b.id 
    WHERE i.customer = :username`;
    const result = await sequelize.query(query, {
      replacements: { username: username },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }
}

module.exports = new ItemService(Item);
