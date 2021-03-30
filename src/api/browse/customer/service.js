const { QueryTypes } = require("sequelize");
const sequelize = require("../../../common/core/sequelize");
const Customer = require("../../../models/customer");
const Service = require("../../../common/service");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
require("dotenv").config();

class CustomerService extends Service {
  async login(customer) {
    const username = customer.username;
    let result = await Customer.findByPk(username);
    if (result == null)
      return { status: 200, message: "Customer doesnt exist" };
    if (
      Customer.encryptPassword(
        customer.password,
        result.getDataValue("salt")
      ) === result.getDataValue("password")
    ) {
      const token = {
        token: jwt.sign({ sub: result.username }, process.env.TOKEN_SECRET, {
          expiresIn: "7d",
        }),
      };
      result = { result, ...token };
      return { status: 200, message: result }; //Succ;
    } else return { status: 401, message: "Incorrect Password" }; //Password doesnt match;
  }

  async validateCustomer(customer) {
    const result = await Customer.findByPk(customer.username);
    if (result) return { status: 403, message: "Username already exist" };
    return { status: 200, message: "Customer is valid" };
  }

  async test() {
    const result = await Customer.findAll();
    return { status: 200, message: result };
  }

  async checkToken(token) {
    var decoded = jwt_decode(token);
    return { status: 200, message: decoded };
  }
}

module.exports = new CustomerService(Customer);
