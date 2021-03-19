const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../core/sequelize");
const { Author } = require("../../../core/sequelize");

class Service {
  async getAllAuthors() {
    return await Author.findAll();
  }

  async getAuthor(id) {
    return await Author.findAll({ where: { id: id } });
  }

  async addAuthor(author) {
    return await Author.create(author);
  }

  async updateAuthor(author) {
    return await Author.update(author);
  }

  async deleteAuthor(id) {
    return await Author.destroy({
      where: {
        id: id,
      },
    });
  }
  
}

module.exports = new Service();
