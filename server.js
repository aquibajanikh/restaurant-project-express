require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/user");
const restaurant = require("./routes/restaurant");
const review = require("./routes/review");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected to db...");
  },
  (err) => {
    console.log("Something went wrong..." + err);
  }
);

const app = express();
const PORT = 3000;

app.use(passport.initialize());
require("./passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", user);
app.use("/api/restaurants", restaurant);
app.use("/api/reviews", review);

app.get("/", (req, res) => {
  res.json({ message: "All good!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
