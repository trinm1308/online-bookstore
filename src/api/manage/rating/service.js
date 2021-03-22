const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Rating } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class RatingService extends Service {
  async deleteOne(id) {
    const result = await Rating.destroy({
      where: {
        id: id,
      },
    });
    return { status: 200, message: result };
  }
}

module.exports = new RatingService(Rating);
