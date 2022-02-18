//init node express app
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

//access environment variables on localhost
// require("dotenv").config();

const app = express();
app.use(cors()); //CORS
app.use(bodyParser.json()); // handle application/json requests
app.use(bodyParser.urlencoded({ extended: true })); // handle application/x-www-form-urlencoded requests

let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 8000;
}

//
//
//
const { Pool } = require("pg");

//pool object hooked into Postgres db
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/users", (req, res) => {
  //read from the db: display all data in Users table
  pool.query(`SELECT * FROM Users;`, (err, res) => {
    if (err) {
      res.send(err);
    } else {
      res.send(res.rows);
    }
  });
});
//
//
//

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
