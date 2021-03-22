const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAll);
router.get("/advanced", getAllWithReviews);
router.get("/:id", getOne);

async function getAll(req, res) {
  try {
    const respond = await service.getAll();
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getOne(req, res) {
  try {
    const respond = await service.getOne(req.params.id);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllWithReviews(req, res) {
  try {
    const respond = await service.getAllWithReviews();
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
