const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const Account = require("../../../models/account");
const Service = require("../../../common/service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AccountService extends Service {
  async updateAccount(account) {
    const result = await Account.update(account, {
      where: { username: account.username },
    });
    return { status: 200, message: result };
  }
  async deleteOne(username) {
    const result = await Account.destroy({ where: { username: username } });
    return { status: 200, message: result };
  }

  async login(account) {
    const username = account.username;
    let result = await Account.findByPk(username);
    if (result == null) return { status: 200, message: "Account doesnt exist" };
    if (
      Account.encryptPassword(account.password, result.getDataValue("salt")) ===
      result.getDataValue("password")
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
}

module.exports = new AccountService(Account);
