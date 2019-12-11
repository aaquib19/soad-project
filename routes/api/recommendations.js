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
    passport.authenticate("jwt", { session:false }), (req, res, next) => {

        User.findById(req.user.id)
            .then(user => {
                // Iterate over each employee, getting the JSON object at each index.
                const N = user.recommendations.length;
                const i = 0;
                while (i < N) {
                    // personObj: JsonObject
                    const personObj = user.recommendations.ObjectAt(i);
                    console.log("Person[" + i + "] = " + personObj.name.StringOf("Name"));
                    i = i+1;
                }

                res.json(user.recommendations);
            })
            .catch(err => {
                res.status(404).json({ norecommendationfound : "No recommendation found!!!" });
            });
    }
);

module.exports = router;
