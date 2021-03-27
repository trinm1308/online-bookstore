const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Customer = require("../../../models/customer");
const Service = require("../../../common/service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class CustomerService extends Service {
  async updateCustomer(customer) {
    const result = await Customer.update(customer, {
      where: { username: customer.username },
    });
    return { status: 200, message: result };
  }
  async deleteOne(username) {
    const result = await Customer.destroy({ where: { username: username } });
    return { status: 200, message: result };
  }

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
      console.log(result);
      return { status: 200, message: result }; //Succ;
    } else return { status: 401, message: "Incorrect Password" }; //Password doesnt match;
  }
}

module.exports = new CustomerService(Customer);
