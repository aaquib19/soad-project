const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

// import model
const User = require("../../models/User");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello words" });
});

// @route   get api/recommendations
// @desc   get recommendations
// @access  Private

router.get(
  "/recommendations",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("hellooo", req.user.id);
    User.findById(req.user.id)
      .then(user => {
        console.log("hdasjhskl", user.recommendations);
        res.json(user.recommendations);
      })
      .catch(err => {
        // console.log("wqekjfadfa");

        res
          .status(404)
          .json({ norecommendationfound: "No recommendation found!!!" });
      });
  }
);

module.exports = router;
