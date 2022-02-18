//init node express app
const path = require("path");
const cors = require("cors");
const express = require("express");

//access environment variables on localhost
// require("dotenv").config();

const app = express();
app.use(cors());

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 8000;
}

//test call
app.get("/", (req, res) => {
  res.json({ message: "gm" });
});

//create api endpoint and handle GET requests to the /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
