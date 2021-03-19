module.exports = (sequelize, type) => {
    return sequelize.define("Order", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING,
      address: type.STRING,
    });
  };
  