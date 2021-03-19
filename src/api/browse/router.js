const express = require("express");
const router = express.Router();
const book = require("./book/router");

router.use("/book", book);

module.exports = router;
