// import { v4 as uuidv4 } from "uuid";
const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
const crypto = require("crypto");
function Model(sequelize, type) {
  const Customer = sequelize.define("Customer", {
    username: {
      type: type.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: type.STRING,
      get() {
        return () => this.getDataValue("password");
      },
    },
    salt: {
      type: type.STRING,
      get() {
        return () => this.getDataValue("salt");
      },
    },
    email: { type: type.STRING, unique: true },
    fullName: type.STRING,
    phone: type.STRING,
    address: type.STRING,
    dob: type.DATE,
  });
  Customer.generateSalt = function () {
    return crypto.randomBytes(16).toString("base64");
  };
  Customer.encryptPassword = function (plainText, salt) {
    return crypto
      .createHash("RSA-SHA256")
      .update(plainText)
      .update(salt)
      .digest("hex");
  };
  const setSaltAndPassword = (customer) => {
    if (customer.changed("password")) {
      customer.salt = Customer.generateSalt();
      customer.password = Customer.encryptPassword(
        customer.password(),
        customer.salt()
      );
    }
  };
  Customer.beforeCreate(setSaltAndPassword);
  Customer.beforeUpdate(setSaltAndPassword);

  return Customer;
}
module.exports = Model(sequelize, Sequelize);
