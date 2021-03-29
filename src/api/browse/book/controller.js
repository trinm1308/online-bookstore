const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAll);
router.get("/genre", getAllGenre);
router.get("/advanced", getAllWithReviews);
router.get("/advanced/:id", getOneWithReviews);
router.get("/search/genre/:genre", searchBookByGenre);
router.get("/search/:keyword", searchBook);
router.get("/search/:keyword/:genre", searchBookAndGenre);
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

async function getOneWithReviews(req, res) {
  try {
    const respond = await service.getOneWithReviews(req.params.id);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function searchBook(req, res) {
  try {
    const respond = await service.searchBook(req.params.keyword);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function searchBookAndGenre(req, res) {
  try {
    const respond = await service.searchBookAndGenre(
      req.params.keyword,
      req.params.genre
    );
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function searchBookByGenre(req, res) {
  try {
    const respond = await service.searchBookByGenre(req.params.genre);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllGenre(req, res) {
  try {
    const respond = await service.getAllGenre();
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
