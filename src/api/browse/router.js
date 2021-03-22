const express = require("express");
const router = express.Router();
const book = require("./book/controller");

router.use("/book", book);

module.exports = router;
