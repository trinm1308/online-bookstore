const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAll);
router.get("/genre", getAllGenre);
router.get("/genre/:genre/:page", getBookByGenre);

router.get("/search/:keyword/:genre/:page", searchBookWithinGenre);
router.get("/search/:keyword/:page", searchBook);

router.get("/page/:page", getAllWithReviews);
router.get("/one/:id", getOneWithReviews);

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

async function getAllWithReviews(req, res) {
  try {
    const respond = await service.getAllWithReviews(parseInt(req.params.page));
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
