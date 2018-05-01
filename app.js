const app = require("express")();
const bodyParser = require("body-parser");
const passport = require("passport");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
const users = require("./routes/api/users");
app.use("/api/users", users);

// Passport Config
require("./config/passport")(passport);

module.exports = app;
