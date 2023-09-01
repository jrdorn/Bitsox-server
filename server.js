//init node express app
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

//TEMP only fake logins
const getUsers = require("./Auth/users");
const getShop = require("./Shop/getShop");
const { nextTick } = require("process");

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

// TEMP
app.get("/", (req, res) => {
  res.json({ message: "gm" });
});

// TEMP read from the db: display dummy data in Users table
app.get("/users", (req, res) => {
  getUsers()
    .then((answer) => res.json(answer))
    .catch((err) => res.send(err));
});

// TEMP
app.get("/api", (req, res) => {
  res.json({ message: "Good morning from the server!" });
});

/* Auth */
app.get("/api/auth", (req, res) => {
  res.json({ message: "User auth" });
});

/* Cart */
app.get("/api/cart", (req, res) => {
  res.json({ message: "Individual user cart items" });
});

/* Private */
app.get("/api/private", (req, res) => {
  res.json({ message: "Private user data: wishlist, routes, account info" });
});

/* Shop */
//get list of shop items and their properties
app.get("/api/shop", (req, res) => {
  getShop()
    .then((answer) => res.json(answer))
    .catch((err) => res.send(err));
});
// get image for individual shop item
app.get("/api/shop/:item", (req, res) => {
  const options = {
    root: path.join(__dirname, "Shop/img"), // access item icons in Shop folder
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  // validate inventory item request
  const item = req.params.item + ".png";

  // send image file to user
  res.sendFile(item, options, (err) => {
    if (err) {
      console.error(err);
      next(err);
    }
  });
});

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
