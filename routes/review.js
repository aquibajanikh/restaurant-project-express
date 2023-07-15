const express = require("express");
const router = express.Router();
const passport = require("passport");
const reviewController = require("../controllers/ReviewController");

router.get("/all", reviewController.getAll);

router.get("/get/:id", reviewController.getReviewsByRestaurant);

router.post("/add", reviewController.addReview);

module.exports = router;
