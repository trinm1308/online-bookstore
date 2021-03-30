const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/book/:productId/:page", getAllReviewsOfBook);
router.get("/:id", getOne);

async function getOne(req, res) {
  try {
    const respond = await service.getOne(req.params.id);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllReviewsOfBook(req, res) {
  try {
    const respond = await service.getAllReviewsOfBook(
      req.params.productId,
      parseInt(req.params.page)
    );
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
