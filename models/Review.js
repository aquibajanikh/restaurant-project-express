const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  resID: { type: String, required: true },
  userID: { type: String, required: true },
  rating: { type: Number, minimum: 0, maximum: 5, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const Review = mongoose.model("reviews", ReviewSchema);

module.exports = Review;
