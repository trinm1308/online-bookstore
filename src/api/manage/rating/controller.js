const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAll);
router.get("/permission/:productId/:username", getRatingPermission);
router.get("/book/:productId", getAllReviewsOfBook);

router.get("/:id", getOne);
router.post("/", addOne);
router.put("/", updateOne);
router.delete("/:id", deleteOne);

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

async function addOne(req, res) {
  try {
    const respond = await service.addOne(req.body);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateOne(req, res) {
  try {
    const respond = await service.updateOne(req.body);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteOne(req, res) {
  try {
    const respond = await service.deleteOne(req.params.id);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllReviewsOfBook(req, res) {
  try {
    const respond = await service.getAllReviewsOfBook(req.params.productId);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getRatingPermission(req, res) {
  try {
    const respond = await service.getRatingPermission(
      req.params.productId,
      req.params.username
    );
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
