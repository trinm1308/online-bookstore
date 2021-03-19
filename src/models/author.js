module.exports = (sequelize, type) => {
    return sequelize.define("Author", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: type.STRING,
      birthday: type.DATE,
      image: type.STRING,
      info: type.TEXT,
    });
  };