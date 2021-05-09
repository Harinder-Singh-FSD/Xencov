const express = require("express")
const app = express()

const db = require("./db/connection");

app.use("/csv",require("./routes/csv"))

db.authenticate()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));


app.listen(5000, (err) => {
    if(err) throw new Error("server not connected")
    console.log("server connected")
  })
