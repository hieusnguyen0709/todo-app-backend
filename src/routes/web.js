const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepage.controller");

router.get("/", homepageController.getHomePage);

module.exports = router;
