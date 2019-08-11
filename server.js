const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//databse configuration
const db = require("./config/keys").mongoURI;

//connect to mongo db

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(err => console.log(err));

app.get("/", (req, res, next) => {
  res.send("jhlk");
});

//use routes

app.use("/api/users", users);
app.use("/api/profile", profile);

// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`server sunnin oon prt ${port}`));
