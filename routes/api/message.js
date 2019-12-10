const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

//model import
const User = require("../../models/User");
const Message = require("../../models/Message");

const validatePostInput = require("../../validation/post");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello workds" });
  console.log("hiiiiiiis");
});

router.get(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        Message.find({ to: req.user.id,from: User.findById(req.params.id) })
        .then( messages => {
            res.json(messages);
        })
        .catch(err => {
            res.status(404).json({ nomessagefound: "no message found for the user" });
        });
});

router.post(
    "/send/:id",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        // const { errors, isValid } = validatePostInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        console.log('hiiiiiiiiiiiiiiiii');
        User.findById(req.params.id)
        .then(user =>{
            console.log(user);
            const newMessage = new Message({
                from: req.user.id,
                from_name: req.user.name,
                to: user.id,
                to_name: user.name,
                from_seen: false,
                to_seen: false,
                content: req.body.content
            });
            newMessage.save().then(message => res.json(message));
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;