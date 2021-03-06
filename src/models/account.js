const { Sequelize } = require("sequelize");
const { sequelize } = require("../common/core/sequelize");
const crypto = require("crypto");
function Model(sequelize, type) {
  const Account = sequelize.define("Account", {
    username: {
      type: type.STRING,
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
    email: type.STRING,
    fullName: type.STRING,
  });
  Account.generateSalt = function () {
    return crypto.randomBytes(16).toString("base64");
  };
  Account.encryptPassword = function (plainText, salt) {
    return crypto
      .createHash("RSA-SHA256")
      .update(plainText)
      .update(salt)
      .digest("hex");
  };
  const setSaltAndPassword = (account) => {
    if (account.changed("password")) {
      account.salt = Account.generateSalt();
      account.password = Account.encryptPassword(
        account.password(),
        account.salt()
      );
    }
  };
  Account.beforeCreate(setSaltAndPassword);
  Account.beforeUpdate(setSaltAndPassword);

  return Account;
}
module.exports = Model(sequelize, Sequelize);
