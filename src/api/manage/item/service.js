const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Item = require("../../../models/item");
const Service = require("../../../common/service");

class ItemService extends Service {
  async getCart(username) {
    const query = `SELECT i.id, i."productId", b.title, b.image, b.price, s."quantity" as "countInStock", i.quantity, i.status
    FROM public."Items" i 
    LEFT JOIN public."Books" b ON i."productId" = b.id 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    WHERE i.customer = :username AND i.status = 0`;
    const result = await sequelize.query(query, {
      replacements: { username: username },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }

  async addOne(item) {
    let result;
    const existingItem = await Item.findOne({
      where: { customer: item.customer, productId: item.productId, status: 0 },
    });
    if (existingItem) {
      const newQuantity = existingItem.quantity + item.quantity;
      result = Item.update(
        { quantity: newQuantity },
        { where: { id: existingItem.id } }
      );
    } else {
      result = await Item.create(item);
    }
    return { status: 200, message: result };
  }

}

module.exports = new ItemService(Item);
