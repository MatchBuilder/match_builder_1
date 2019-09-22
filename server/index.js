const dotenv = require("dotenv"),
  express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
dotenv.config();
const passport = require("passport");
const users = require("./routes/api/users");

const keys = require("./config/keys");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const uri = keys.mongoURI;
// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
