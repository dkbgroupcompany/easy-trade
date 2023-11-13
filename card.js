const express = require("express");
const router = express.Router();
const savePin = require("savePin.js");
const sellingcardPin = require('cardSelling.js')

router.post("/save", savePin);
router.post("/sell", sellingcardPin)

module.exports = router;
