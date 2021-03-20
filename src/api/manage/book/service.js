const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Book } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class BookService extends Service {
  async deleteOne(id) {
    await Book.destroy({ where: { id: id } });
    return 200;
  }
}

module.exports = new BookService(Book);
