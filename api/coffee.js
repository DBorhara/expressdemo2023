const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("MMMM I LOVE COFEEEE");
  res.send("This is my coffee route");
  res.sendStatus(200);
});

module.exports = router;
