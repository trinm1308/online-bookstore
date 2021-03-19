module.exports = (sequelize, type) => {
  return sequelize.define("Account", {
    username: {
      type: type.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    email: type.STRING,
    fullName: type.STRING,
  });
};
