const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAll);
router.get("/:username", getOne);
router.post("/", addOne);
router.put("/", updateCustomer);
router.delete("/:username", deleteOne);

router.post("/login", login);

async function getAll(req, res) {
  try {
    const respond = await service.getAll()
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getOne(req, res) {
  try {
    const respond = await service.getOne(req.params.username)
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addOne(req, res) {
  try {
    const respond = await service.addOne(req.body)
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateCustomer(req, res) {
  try {
    const respond = await service.updateCustomer(req.body)
    res.status(respond.status).json(respond);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteOne(req, res) {
  try {
    const respond = await service.deleteOne(req.params.username)
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
