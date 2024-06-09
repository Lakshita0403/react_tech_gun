const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const client = mongoose.model("client");

router.get("/", (req, res) => {
    res.send("hello");
  })

  router.post("/", (req, res) => {
    res.json("data posted successfully");
  })
  

  const user = new client({
    title,
    date,
    amount,
  })

    

  module.exports = router;
