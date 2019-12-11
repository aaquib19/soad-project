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
  recommendations: [
    //recommendations of friend
    // {
    //   user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "users"
    //   }
    // }
    // {
    //   type: String
    // }
    mongoose.Schema.Types.ObjectId
  ],
  lastlogin: {
    type: String
  },
  notifications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notification"
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
  // chat_rooms: [
  //   {
  //     type: String
  //   }
  // ]
});

module.exports = User = mongoose.model("users", UserSchema);
