const express = require("express");
const router = express.Router();

class Router {
  constructor(service) {
    this.service = service;
    router.get("/", this.getAll);
    router.get("/:id", this.getOne);
    router.post("/", this.addOne);
    router.put("/", this.updateOne);
    router.delete("/:id", this.deleteOne);
    this.router = router;
    
  }

  async getAll(req, res) {
    res.send(await this.service.getAll());
  }

  async getOne(req, res) {
    res.send(await this.service.getOne(req.params.id));
  }

  async addOne(req, res) {
    res.send(await this.service.addOne(req.body));
  }

  async updateOne(req, res) {
    res.send(await this.service.updateOne(req.body));
  }

  async deleteOne(req, res) {
    res.send(await this.service.deleteOne(req.params.id));
  }
}

module.exports = Router;
