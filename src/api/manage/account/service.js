const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Account } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class AccountService extends Service {
  async updateAccount(account) {
    await Account.update(account, { where: { username: account.username } });
    return 200;
  }
  async deleteOne(username) {
    await Account.destroy({ where: { username: username } });
    return 200;
  }

  async login(account) {
    const username = account.username;
    const query = await Account.findByPk(username);
    if (query == null) return { status: 200, message: "Account doesnt exist" }; //
    if (
      Account.encryptPassword(account.password, query.getDataValue("salt")) ===
      query.getDataValue("password")
    ) {
      return { status: 200, message: "Login Succ" }; //Succ;
    } else return { status: 401, message: "Incorrect Password" }; //Password doesnt match;
  }
}

module.exports = new AccountService(Account);
