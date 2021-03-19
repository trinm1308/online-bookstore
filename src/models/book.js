module.exports = (sequelize, type) => {
  return sequelize.define("Book", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    publishedDate: type.DATE,
    image: type.STRING,
    price: type.FLOAT,
    oldPrice: type.FLOAT,
    countInStock: type.INTEGER,
    author: type.STRING,
    publisher: type.STRING,
    rating: type.FLOAT,
    numReviews: type.INTEGER,
    description: type.TEXT,
  });
};
