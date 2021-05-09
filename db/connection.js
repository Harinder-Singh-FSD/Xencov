const Sequelize = require("sequelize");
module.exports = new Sequelize("xencov", "postgres", "22118895", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
