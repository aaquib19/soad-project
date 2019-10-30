const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const chatSchema = new Schema({
  id: String, //we can use combine id of users userid1+userid2+userid3
  users: Array, //["users1","user2" ]
  chats: Array //{text:"hi", by:"aaquib", time:"10:35pm"}
});

module.exports = Room = mongoose.model("room", chatSchema);
