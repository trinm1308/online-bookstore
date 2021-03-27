const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Payment = require("../../../models/payment");
const Service = require("../../../common/service");

class PaymentService extends Service {
  
}

module.exports = new PaymentService(Payment);
