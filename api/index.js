const express = require("express");
// Using express router to define different routes
const router = express.Router();

//Root is api/

// Mount the api so any route on /test comes from test.js
router.use("/test", require("./test")); // api/test
router.use("/coffee", require("./coffee")); // api/cofee

// Handling 404 Errors in our API
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next();
});

module.exports = router;
