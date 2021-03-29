const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Stock = require("../../../models/stock");
const Service = require("../../../common/service");

class StockService extends Service {
  
}

module.exports = new StockService(Stock);
