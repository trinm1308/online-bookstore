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

  async updateBook(book) {
    return await Book.update(book);
  }

  async deleteBook(id) {
    return await Book.destroy({
      where: {
        id: id,
      },
    });
  }
  
}

module.exports = new Service();
