const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../common/core/sequelize");
const { Book } = require("../../../common/core/sequelize");
const BookService = require("../../../api/manage/book/service");

module.exports = BookService;
