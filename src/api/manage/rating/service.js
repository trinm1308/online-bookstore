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
      where: { customer: item.customer, account: rating.account },
    });
    if (existingAccount) {
      result = Rating.update(
        { content: rating.content },
        { where: { id: existingRating.id } }
      );
    } else {
      result = await Rating.create(rating);
    }
    return { status: 200, message: result };
  }
}

module.exports = new RatingService(Rating);
