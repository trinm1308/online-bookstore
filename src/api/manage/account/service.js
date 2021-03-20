const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../core/sequelize");
const { Account } = require("../../../core/sequelize");

class Service {
  async getAllAccounts() {
    return await Account.findAll();
  }

  async getAccount(username) {
    return await Account.findAll({ where: { username: username } });
  }

  async addAccount(account) {
    return await Account.create(account);
  }

  async updateAccount(account) {
    return await Account.update(account);
  }

  async deleteAccount(username) {
    return await Account.destroy({
      where: {
        username: username,
      },
    });
  }

  async login(account) {
    const username = account.username;
    const query = await Account.findByPk(username);
    if (Account.encryptPassword(account.password, query.getDataValue('salt')) === query.getDataValue('password')) {
      return true
    } else return false
  }
}

module.exports = new Service();
