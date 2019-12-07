const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
{
    type_of_notification: String,
    seen: Boolean,
    post: {
        type: Schema.Types.ObjectId,
        ref: "post"
    },
    who_did: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    to_whom: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    friend: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Notification", notificationSchema);