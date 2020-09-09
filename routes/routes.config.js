const express = require("express");
const router = express.Router();

const priceController = require("../controllers/price.controller");

router.get("/", priceController.init);

module.exports = router;
