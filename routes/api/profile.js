//location bio expreericnes profile model basically
const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const passport = require("passport");

// @route Get api/profile/test
// @desc  test profile route
// @access public
router.get("/test", (req, res, next) => {
  res.json({
    msg: "profile work"
  });
});

module.exports = router;
