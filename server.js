//init node express app
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

//TEMP only fake logins
const getUsers = require("./Auth/users");
const getShop = require("./Shop/getShop");

//access environment variables on localhost
// require("dotenv").config();

const app = express();
app.use(cors()); //CORS
app.use(bodyParser.json()); // handle application/json requests
app.use(bodyParser.urlencoded({ extended: true })); // handle application/x-www-form-urlencoded requests

//set app port
let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 8000;
}

/* Routes */

// TEST temporary
app.get("/", (req, res) => {
  res.json({ message: "gm" });
});

// TEST read from the db: display all data in Users table
app.get("/users", (req, res) => {
  getUsers()
    .then((answer) => res.json(answer))
    .catch((err) => res.send(err));
});

// TEXT temporary
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

/* Auth */

/* Cart */

/* Private */

/* Shop */

//get list of shop items and their properties
app.get("/api/shop", (req, res) => {
  getShop()
    .then((answer) => res.json(answer))
    .catch((err) => res.send(err));
});

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
