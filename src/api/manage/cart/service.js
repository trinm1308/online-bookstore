const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const Cart = require("../../../models/cart");
const Service = require("../../../common/service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class CartService extends Service {
  
}

module.exports = new CartService(Cart);
