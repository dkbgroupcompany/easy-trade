const express = require("express");
const router = express.Router();
const savePin = require("savePin");
const sellingcardPin = require('cardSelling')

router.post("/save", savePin);
router.post("/sell", sellingcardPin)

module.exports = router;
