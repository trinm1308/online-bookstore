const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/:username", getOne);
router.post("/login", login);
router.post("/", addOne)

async function getOne(req, res) {
  try {
    const respond = await service.getOne(req.params.username)
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addOne(req, res){
  try {
    const respond = await service.addOne(req.body)
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function login(req, res) {
  try {
    const respond = await service.login(req.body);
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
