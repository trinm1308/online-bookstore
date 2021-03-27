const { QueryTypes } = require("sequelize");
//const { Sequelize } = require("../../../core/sequelize");

class Service {
  constructor(model) {
    this.model = model;
  }
  async getAll() {
    const result = await this.model.findAll();
    return { status: 200, message: result };
  }

  async getOne(pk) {
    const result = await this.model.findByPk(pk);
    return { status: 200, message: result };
  }

  async addOne(object) {
    const result = await this.model.create(object);
    return { status: 200, message: result };
  }

  async updateOne(object) {
    const result = await this.model.update(object, {
      where: { id: object.id },
    });
    return { status: 200, message: result };
  }

  async deleteOne(id) {
    const result = await this.model.destroy({ where: { id: id } });
    return { status: 200, message: result };
  }
}

module.exports = Service;
