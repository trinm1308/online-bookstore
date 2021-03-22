const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAllBooks);
router.get("/advanced", getBooksAdvanced);
router.get("/:id", getBook);

async function getAllBooks(req, res) {
  try {
    res.status(200).json(await service.getAll());
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getBook(req, res) {
  try {
    res.status(200).json(res.send(await service.getOne(req.params.id)));
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getBooksAdvanced(req, res) {
  try {
    res.status(200).json(await service.getBooksAdvanced());
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
