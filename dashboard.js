const express = require("express");
const router = express.Router();
const dashboard = require("dashboard");

router.get("/",  dashboard);

module.exports = router;
