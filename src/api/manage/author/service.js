const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Author } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class AuthorService extends Service {
  async deleteOne(id) {
    const result = await Author.destroy({
      where: {
        id: id,
      },
    });
    return { status: 200, message: result };
  }
}

module.exports = new AuthorService(Author);
