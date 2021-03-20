const express = require("express");
const router = express.Router();
const account = require("./account/router");
const author = require("./author/router");
const book = require("./book/router");

router.use("/book", book);
router.use("/account", account);
router.use("/author", author);

module.exports = router;

