const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Rating = require("../../../models/rating");
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
  async getAllReviewsOfBook(productId) {
    const result = await Rating.findAll({
      where: {
        productId: productId,
      },
    });
    return { status: 200, message: result };
  }

  async getRatingPermission(productId, username) {}
}

module.exports = new RatingService(Rating);
