const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

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

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));
