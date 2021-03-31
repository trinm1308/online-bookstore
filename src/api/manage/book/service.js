const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const Book = require("../../../models/book");
const Service = require("../../../common/service");

class BookService extends Service {
  async deleteOne(id) {
    const result = await Book.destroy({ where: { id: id } });
    return { status: 200, message: result };
  }
  // async getAllWithReviews() {
  //   const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description"
  //   FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId"
  //   LEFT JOIN public."Stocks" s ON b.id = s."productId"
  //   GROUP BY b.id, s."quantity"
  //   ORDER BY b.id ASC`;
  //   const result = await sequelize.query(query, { type: QueryTypes.SELECT });
  //   return { status: 200, message: result };
  // }
  async getAllWithReviews(page) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    GROUP BY b.id, s."quantity" 
    ORDER BY b.id ASC
    LIMIT :limit OFFSET :offset`;
    const limit = this.PAGE_LIMIT;
    const offset = page == 1 ? 0 : limit * (page - 1);
    const result = await sequelize.query(query, {
      replacements: { limit: limit, offset: offset },
      type: QueryTypes.SELECT,
    });
    const recordCount = await Book.count();
    const pageNumber =
      recordCount % limit == 0
        ? recordCount / limit
        : Math.floor(recordCount / limit) + 1;
    const paging = { page: page, pageNumber: pageNumber };
    return { status: 200, message: { result, ...paging } };
  }

  async getTopReview(top) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    GROUP BY b.id, s."quantity" 
    ORDER BY rating DESC
    LIMIT :top`;
    const result = await sequelize.query(query, {
      replacements: { top: top },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }

  async getOneWithReviews(id) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    WHERE b.id = :id
    GROUP BY b.id, s."quantity" 
    ORDER BY b.id ASC`;
    const result = await sequelize.query(query, {
      replacements: { id: id },
      type: QueryTypes.SELECT,
    });
    return { status: 200, message: result };
  }
  async searchBook(keyword, page) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    WHERE b.title ILIKE :keyword
    GROUP BY b.id, s."quantity" 
    ORDER BY b.id ASC
    LIMIT :limit OFFSET :offset`;
    const keywordReplacement = "%" + keyword + "%";

    const limit = this.PAGE_LIMIT;
    const offset = page == 1 ? 0 : limit * (page - 1);
    const result = await sequelize.query(query, {
      replacements: {
        keyword: keywordReplacement,
        limit: limit,
        offset: offset,
      },
      type: QueryTypes.SELECT,
    });
    const recordCount = await Book.count({
      where: { title: { [Op.iLike]: keywordReplacement } },
    });
    const pageNumber =
      recordCount % limit == 0
        ? recordCount / limit
        : Math.floor(recordCount / limit) + 1;
    const paging = { page: page, pageNumber: pageNumber };
    return { status: 200, message: { result, ...paging } };
  }

  async searchBookWithinGenre(keyword, genre, page) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    WHERE b.genre = :genre AND b.title ILIKE :keyword
    GROUP BY b.id, s."quantity" 
    ORDER BY b.id ASC
    LIMIT :limit OFFSET :offset`;
    const keywordReplacement = "%" + keyword + "%";

    const limit = this.PAGE_LIMIT;
    const offset = page == 1 ? 0 : limit * (page - 1);
    const result = await sequelize.query(query, {
      replacements: {
        keyword: keywordReplacement,
        genre: genre,
        limit: limit,
        offset: offset,
      },
      type: QueryTypes.SELECT,
    });
    const recordCount = await Book.count({
      where: {
        title: { [Op.iLike]: keywordReplacement },
        genre: genre,
      },
    });
    const pageNumber =
      recordCount % limit == 0
        ? recordCount / limit
        : Math.floor(recordCount / limit) + 1;
    const paging = { page: page, pageNumber: pageNumber };
    return { status: 200, message: { result, ...paging } };
  }

  async getBookByGenre(genre, page) {
    const query = `SELECT b.id, b.title, b.genre, b."publishedDate", b.image, b.price, b."oldPrice", s."quantity" as "countInStock", b.author, b.publisher, AVG(r."rating") as "rating", COUNT(r."id") as "numReviews", b."description" 
    FROM public."Books" b LEFT JOIN public."Ratings" r ON b.id = r."productId" 
    LEFT JOIN public."Stocks" s ON b.id = s."productId"
    WHERE b.genre = :genre
    GROUP BY b.id, s."quantity" 
    ORDER BY b.id ASC
    LIMIT :limit OFFSET :offset`;
    const limit = this.PAGE_LIMIT;
    const offset = page == 1 ? 0 : limit * (page - 1);
    const result = await sequelize.query(query, {
      replacements: { genre: genre, limit: limit, offset: offset },
      type: QueryTypes.SELECT,
    });
    const recordCount = await Book.count({ where: { genre: genre } });
    const pageNumber =
      recordCount % limit == 0
        ? recordCount / limit
        : Math.floor(recordCount / limit) + 1;
    const paging = { page: page, pageNumber: pageNumber };
    return { status: 200, message: { result, ...paging } };
  }
  async getAllGenre() {
    const query = `SELECT DISTINCT b.genre
    FROM public."Books" b
    GROUP BY b.genre 
    ORDER BY b.genre ASC`;
    const result = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      raw: true,
    });
    const genres = [];
    for (const record of result) {
      genres.push(record.genre);
    }
    return { status: 200, message: { genre: genres } };
  }
}

module.exports = new BookService(Book);
