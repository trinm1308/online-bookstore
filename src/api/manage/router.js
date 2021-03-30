const express = require("express");
const router = express.Router();
const account = require("./account/controller");
const book = require("./book/controller");
const rating = require("./rating/controller");
const customer = require("./customer/controller");
const item = require("./item/controller");
const order = require("./order/controller");
const stock = require("./stock/controller");
const jwt = require("../../common/auth/jwt")

router.use(jwt())
router.use("/book", book);
router.use("/account", account);
router.use("/rating", rating);
router.use("/customer", customer);
router.use("/item", item);
router.use("/order", order);
router.use("/stock", stock);

module.exports = router;
