//authentication username email password
const express = require("express");
const router = express.Router();
// const gravatar = require("gravatar");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const passport = require("passport");

// @route Get api/users/test
// @desc  test users route
// @access public

router.get("/test", (req, res, next) => {
  res.json({
    msg: "users work"
  });
});

module.exports = router;
