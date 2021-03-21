const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { Rating } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class RatingService extends Service {
  async deleteRating(id) {
    await Rating.destroy({
      where: {
        id: id,
      },
    });
    return 200;
  }
}

module.exports = new RatingService(Rating);