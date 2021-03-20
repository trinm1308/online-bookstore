const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Author } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class AuthorService extends Service {
  async deleteAuthor(id) {
    await Author.destroy({
      where: {
        id: id,
      },
    });
    return 200;
  }
}

module.exports = new AuthorService(Author);
