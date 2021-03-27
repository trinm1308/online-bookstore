const express = require("express");
const router = express.Router();
const book = require("./book/controller");
const account = require("./account/controller");
const customer = require("./customer/controller");

router.use("/book", book);
router.use("/account", account);
router.use("/customer", customer);

module.exports = router;
