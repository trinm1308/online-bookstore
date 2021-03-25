const express = require("express");
const router = express.Router();
const account = require("./account/controller");
const author = require("./author/controller");
const book = require("./book/controller");
const rating = require("./rating/controller");

router.use("/book", book);
router.use("/account", account);
router.use("/author", author);
router.use("/rating", rating);

module.exports = router;

