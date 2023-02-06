const express = require("express");
const router = new express.Router();
const controller= require("../controller/casesController")

//routes

router.post("/user/register",controller.userpost);
router.get("/user/details",controller.userget);

module.exports = router