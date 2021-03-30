const express = require("express");
const router = express.Router();
const book = require("./book/controller");
const account = require("./account/controller");
const customer = require("./customer/controller");
const rating = require("./rating/controller");

router.use("/book", book);
router.use("/account", account);
router.use("/customer", customer);
router.use("/rating", rating);

module.exports = router;
