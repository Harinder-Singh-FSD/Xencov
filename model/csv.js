const Sequelize = require("sequelize");
const db = require("../db/connection");

const CSV = db.define("csv", {
  Region: {
    type: Sequelize.STRING,
  },
  Country: {
    type: Sequelize.STRING,
  },
  Item_Type: {
    type: Sequelize.STRING,
  },
  Sales_Channel: {
    type: Sequelize.ENUM,
    values: ["Online", "Offline"],
  },
  Order_Priority: {
    type: Sequelize.ENUM,
    values: ["H", "L", "M", "C"],
  },
  Order_Date: {
    type: Sequelize.DATEONLY,
  },
  Order_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  Ship_Date: {
    type: Sequelize.DATEONLY,
  },
  Units_Sold: {
    type: Sequelize.INTEGER,
  },
  Unit_Price: {
    type: Sequelize.INTEGER,
  },
  Unit_Cost: {
    type: Sequelize.INTEGER,
  },
  Total_Revenue: {
    type: Sequelize.INTEGER,
  },
  Total_Cost: {
    type: Sequelize.INTEGER,
  },
  Total_Profit: {
    type: Sequelize.INTEGER,
  },
});

module.exports = CSV;
