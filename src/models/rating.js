module.exports = (sequelize, type) => {
  return sequelize.define("Rating", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: type.INTEGER,
    rating: { type: type.FLOAT, min: 0.5, max: 5 },
    account: type.STRING,
    content: type.STRING
  });
};
