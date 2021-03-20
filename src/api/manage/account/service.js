const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Account } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class AccountService extends Service {
  async deleteOne(username) {
    await Account.destroy({ where: { username: username } });
    return 200
  }

  async login(account) {
    const username = account.username;
    const query = await Account.findByPk(username);
    if (
      Account.encryptPassword(account.password, query.getDataValue("salt")) ===
      query.getDataValue("password")
    ) {
      return true;
    } else return false;
  }
}

module.exports = new AccountService(Account);
