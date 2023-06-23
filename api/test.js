const express = require("express");
const router = express.Router();

// Root path here is /api/test
// Get route
router.get("/", (req, res, next) => {
  console.log("THIIS IS THE TEST ROUTE");
});

// /api/test/apple
// Get route
router.get("/apple", (req, res, next) => {
  console.log("THIIS IS THE TEST ROUTE WITH APPLES");
  const object = { happy: "food", sad: "hungry" };
  const jsonObj = JSON.stringify(object);
  res.send(jsonObj);
});

module.exports = router;
