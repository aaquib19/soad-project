const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
{
    friend_requests_unseen: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    friend_requests_seen: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    posts_unseen: [
        {
            type: Schema.Types.ObjectId,
            ref: "post"
        }
    ],
    posts_seen: [
        {
            type: Schema.Types.ObjectId,
            ref: "post"
        }
    ]
},
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);