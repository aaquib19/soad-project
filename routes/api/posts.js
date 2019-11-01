const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

//model import
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

const validatePostInput = require("../../validation/post");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello workds" });
});

//@route get api/posts
//@acces public
// @desc get all posts
router.get("/", (req, res, next) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "no posts found " }));
});

//@route get api/posts/:id
//@acces public
// @desc get post by id
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)

    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "no post found for the id " })
    );
});

//@route Posts api/posts
//@acess private
//@desc create post

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar, //name and avatar  is logged in we will fetch name and avatar from redux (user state)
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);

router.delete(
  ":id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Profile;
  }
);

module.exports = router;
