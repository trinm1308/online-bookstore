const express = require("express");
const router = express.Router();
const account = require("./account/router");
const author = require("./author/router");
const book = require("./book/router");
const rating = require("./rating/router");

router.use("/book", book);
router.use("/account", account);
router.use("/author", author);
router.use("/rating", rating);

module.exports = router;

