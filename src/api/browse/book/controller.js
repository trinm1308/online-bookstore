const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/top/rating/:top", getTopRatingDESC)
router.get("/top/date/:top", getTopDateDESC)
router.get("/genre", getAllGenre);
router.get("/genre/:genre/:page", getBookByGenre);

router.get("/search/:keyword/:genre/:page", searchBookWithinGenre);
router.get("/search/:keyword/:page", searchBook);

router.get("/page/:page", getAllWithReviews);
router.get("/one/:id", getOneWithReviews);

async function getAllWithReviews(req, res) {
  try {
    const respond = await service.getAllWithReviews(parseInt(req.params.page));
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getTopRatingDESC(req, res) {
  try {
    const respond = await service.getTopRatingDESC(parseInt(req.params.top));
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getTopDateDESC(req, res) {
  try {
    const respond = await service.getTopDateDESC(parseInt(req.params.top));
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

async function getBookByGenre(req, res) {
  try {
    const respond = await service.getBookByGenre(
      req.params.genre,
      parseInt(req.params.page)
    );
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function searchBook(req, res) {
  try {
    const respond = await service.searchBook(
      req.params.keyword,
      parseInt(req.params.page)
    );
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

async function searchBookWithinGenre(req, res) {
  try {
    const respond = await service.searchBookWithinGenre(
      req.params.keyword,
      req.params.genre,
      parseInt(req.params.page)
    );
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
