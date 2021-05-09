const express = require("express");
const db = require("../db/connection");
const router = express.Router();
const CSV = require("../model/csv");
const addCSV = require("../controller/csv");
router.post("/", addCSV);
router.get("/", async (req, res) => {
  try {
    const data = await CSV.findAll();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
