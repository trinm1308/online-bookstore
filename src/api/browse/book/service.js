const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../core/sequelize");
const { Book } = require("../../../core/sequelize");

class Service {
  async getAllBooks() {
    const books = await Book.findAll();
    return books;
  }

  async getBook(id) {
    return await Book.findAll({ where: { id: id } });
  }

  async addBook(book) {
    return await Book.create(book);
  }
}

module.exports = new Service();
