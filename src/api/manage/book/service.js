const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const { Book } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class BookService extends Service {
  async deleteOne(id) {
    await Book.destroy({ where: { id: id } });
    return 200;
  }
  async getBooksAdvanced() {
    const str = `SELECT b.id, b.title, b."publishedDate", b.image, b.price, b."oldPrice", b."countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    GROUP BY b.id 
    ORDER BY b.id ASC`;
    return await sequelize.query(str, { type: QueryTypes.SELECT });
  }
}

module.exports = new BookService(Book);
