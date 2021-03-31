const { QueryTypes } = require("sequelize");
const { Sequelize } = require("../../../common/core/sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Item = require("../../../models/item");
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

  async getRatingPermission(productId, username) {
    const check = await Item.findOne({
      where: { productId: productId, customer: username, status: 1 },
    });
    if (check) return { status: 200, message: true };
    else return { status: 401, message: "Unauthorized to add a rating" };
  }

  async addOne(rating) {
    let result;
    const existingRating = await Rating.findOne({
      where: { productId: rating.productId, account: rating.account },
    });
    if (existingRating) {
      result = await Rating.update(
        { rating: rating.rating, content: rating.content },
        { where: { id: existingRating.id } }
      );
    } else {
      result = await Rating.create(rating);
    }
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
}

module.exports = new RatingService(Rating);
