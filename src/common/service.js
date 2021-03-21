const { QueryTypes } = require("sequelize");
//const { Sequelize } = require("../../../core/sequelize");

class Service {
  constructor(model) {
    this.model = model;
  }
  async getAll() {
    return await this.model.findAll();
  }

  async getOne(pk) {
    return await this.model.findByPk(pk);
  }

  async addOne(object) {
    return await this.model.create(object);
  }

  async updateOne(object) {
    return await this.model.update(object, { where: { id: object.id } });
  }
}

module.exports = Service;
