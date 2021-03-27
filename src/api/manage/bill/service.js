const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Bill = require("../../../models/bill");
const Service = require("../../../common/service");

class BillService extends Service {
  
}

module.exports = new BillService(Bill);
