const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const socketio = require('socket.io');

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const sendrequest = require("./routes/api/friend_request");

// chatroom users
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//databse configuration
const db = require("./config/keys").mongoURI;

//connect to mongo db

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(err => console.log(err));

//passw=port middle ware

app.use(passport.initialize());

//passport config

require("./config/passport")(passport);

//use routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/friends", sendrequest);

const port = 5000 || process.env.PORT;
const server = app.listen(port, () => console.log(`server is running on port ${port}`));

const io = socketio(server);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'Whizingo Bot', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'Whizingo Bot', text: `${user.name} joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Whizingo Bot', text: `${user.name} left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});
