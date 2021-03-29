const express = require("express");
const router = express.Router();
const account = require("./account/controller");
const book = require("./book/controller");
const rating = require("./rating/controller");
const customer = require("./customer/controller");
const item = require("./item/controller");
const cart = require("./cart/controller");
const payment = require("./payment/controller");
const order = require("./order/controller");
const bill = require("./bill/controller");
const stock = require("./stock/controller");
const jwt = require("../../common/auth/jwt")

router.use(jwt())
router.use("/book", book);
router.use("/account", account);
router.use("/rating", rating);
router.use("/customer", customer);
router.use("/item", item);
router.use("/cart", cart);
router.use("/payment", payment);
router.use("/order", order);
router.use("/bill", bill);
router.use("/stock", stock);

module.exports = router;
