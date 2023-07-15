const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/UserController");

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
