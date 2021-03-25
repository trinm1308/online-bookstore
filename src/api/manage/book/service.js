const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const { Book } = require("../../../common/core/sequelize");
const Service = require("../../../common/service");

class BookService extends Service {
  async deleteOne(id) {
    const result = await Book.destroy({ where: { id: id } });
    return { status: 200, message: result };
  }
  async getAllWithReviews() {
    const query = `SELECT b.id, b.title, b."publishedDate", b.image, b.price, b."oldPrice", b."countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    GROUP BY b.id 
    ORDER BY b.id ASC`;
    const result = await sequelize.query(query, { type: QueryTypes.SELECT });
    return { status: 200, message: result };
  }
  async getOneWithReviews(id) {
    const query = `SELECT b.id, b.title, b."publishedDate", b.image, b.price, b."oldPrice", b."countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    WHERE b.id = :id
    GROUP BY b.id 
    ORDER BY b.id ASC`;
    const result = await sequelize.query(query, {
      replacements: { id: id },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }
  async searchBook(keyword) {
    const query = `SELECT b.id, b.title, b."publishedDate", b.image, b.price, b."oldPrice", b."countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    WHERE b.title ILIKE :keyword
    GROUP BY b.id 
    ORDER BY b.id ASC`;
    const replacement = "%" + keyword + "%";
    const result = await sequelize.query(query, {
      replacements: { keyword: replacement },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }
}

module.exports = new BookService(Book);
