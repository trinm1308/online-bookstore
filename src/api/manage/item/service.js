const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Item = require("../../../models/item");
const Service = require("../../../common/service");

class ItemService extends Service {
  
}

module.exports = new ItemService(Item);
