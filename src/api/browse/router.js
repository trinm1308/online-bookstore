const express = require("express");
const router = express.Router();
const book = require("./book/controller");
const account = require("./account/controller");

router.use("/book", book);
router.use("/account", account);

module.exports = router;
