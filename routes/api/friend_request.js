const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../../models/User");
const Schema = mongoose.Schema;


router.post("/requestsent", passport.authenticate("jwt", { session: false }), (req, res, next) => {
  const senderId = req.body.senderid;
  const recieverId = req.body.recieverid;

  User.findById(senderId, function (err, user) {

    const recieveruser = {
      "user": mongoose.Types.ObjectId(recieverId)
    }
    
    user.pending.push(recieveruser.user);
    user.save();
  })
    .then(user =>
      User.findById(recieverId, function (err, user) {

        const senderuser = {
          "user": mongoose.Types.ObjectId(senderId)
        }

        user.waiting.push(senderuser.user);
        user.save();
      })
        .then(user => res.status(201).json({
          "success": true
        }
        ))
        .catch(err => res.status(404).json({ "success": false }))

    )
    .catch(err => res.status(404).json({ "success": false }));

});




router.post("/requestaccept", passport.authenticate("jwt", { session: false }), (req, res, next) => {
  // console.log("in accept");
  const senderId = req.body.senderid;
  const recieverId = req.body.recieverid;

  User.findById(recieverId, function (err, user) {

    const senderuser = {
      "user": mongoose.Types.ObjectId(senderId)
    }

    const deletewaiting = user.waiting.filter(item => {
      return item._id.toString() !== senderuser.user.toString();
    })

    user.waiting = deletewaiting;

    user.freinds.push(senderuser.user)
    user.save()
    // console.log(recieveruser.user)
  }).then(user =>
    User.findById(senderId, function (err, user) {

      const recieveruser = {
        "user": mongoose.Types.ObjectId(recieverId)
      }

      const deletepending = user.pending.filter(item => {
        return item._id.toString() !== recieveruser.user.toString();
      })

      user.pending = deletepending;

      user.freinds.push(recieveruser.user)
      user.save();
    }).then(user => res.status(201).json({ "success": true }))
  )

})



module.exports = router;