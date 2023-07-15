const express = require("express");
const router = express.Router();
const passport = require("passport");
const restaurantController = require("../controllers/RestaurantController");

router.get("/all", restaurantController.getAll);

router.get("/get/:id", restaurantController.getRestaurant);

router.post("/add", restaurantController.addRestaurant);

module.exports = router;
