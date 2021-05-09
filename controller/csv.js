"use strict";
const csv = require("csv-parser");
const fs = require("fs");
const CSV = require("../model/csv");

const addCSV = async (req, res) => {
  try {
    const results = [];
    await fs
      .createReadStream("sample.csv")
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        results.map((item) => {
          CSV.create({
            Region: item["Region"],
            Country: item["Country"],
            Item_Type: item["Item Type"],
            Sales_Channel: item["Sales Channel"],
            Order_Priority: item["Order Priority"],
            Order_Date: item["Order Date"],
            Order_ID: item["Order ID"],
            Ship_Date: item["Ship Date"],
            Units_Sold: item["Units Sales"],
            Unit_Price: item["Unit Price"],
            Unit_Cost: item["Unit Cost"],
            Total_Revenue: item["Total Revenue"],
            Total_Cost: item["Total Cost"],
            Total_Profit: item["Total Profit"],
          });
        });
      });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = addCSV;
