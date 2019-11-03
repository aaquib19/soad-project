const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date
  },
  freinds: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  pending: [
    //outgoing request
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  waiting: [
    //incoming request
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  lastlogin: {
    type: String
  },
  notifications: [
    {
      type: String
    }
  ]
  // chat_rooms: [
  //   {
  //     type: String
  //   }
  // ]
});

module.exports = User = mongoose.model("users", UserSchema);
