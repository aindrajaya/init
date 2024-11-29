//routes/index.js
const express = require("express");
const router = express.Router();
const pagesRouter = require("./pages");

/* GET home page. */
router.use(pagesRouter);

module.exports = router;
