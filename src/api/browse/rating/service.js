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
  async getAllReviewsOfBook(productId, page) {
    const limit = this.PAGE_LIMIT;
    const offset = page == 1 ? 0 : limit * (page - 1);
    const recordCount = await Rating.count({
      where: {
        productId: productId,
      },
    });
    const result = await Rating.findAll({
      where: {
        productId: productId,
      },
      limit: limit,
      offset: offset,
    });
    const pageNumber =
      recordCount % limit == 0
        ? recordCount / limit
        : Math.floor(recordCount / limit) + 1;
    const paging = { page: page, pageNumber: pageNumber };
    return { status: 200, message: { result, ...paging } };
  }

  async getRatingPermission(productId, username) {}
}

module.exports = new RatingService(Rating);
