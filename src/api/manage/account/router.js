const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", getAllAccounts);
router.get("/:username", getAccount);
router.post("/", addAccount);
router.put("/", updateAccount);
router.delete("/:username", deleteAccount);

router.post("/login", login);

async function getAllAccounts(req, res) {
  try {
    res.status(200).json(await service.getAll());
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAccount(req, res) {
  res.send(await service.getOne(req.params.username));
}

async function addAccount(req, res) {
  res.send(await service.addOne(req.body));
}

async function updateAccount(req, res) {
  res.send(await service.updateAccount(req.body));
}

async function deleteAccount(req, res) {
  res.sendStatus(await service.deleteOne(req.params.username));
}

async function login(req, res) {
  const login = await service.login(req.body);
  try {
    res.status(login.status).json(login);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
