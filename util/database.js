const Sequelize = require("sequelize");

const sequelize = new Sequelize("ejsProject", "root", "180828", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
