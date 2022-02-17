//init node express app
const path = require("path");
const express = require("express");
let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 8000;
}
const app = express();

//test call
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', '../'))
// });

//access environment variables on localhost
// require("dotenv").config();

//practice Postgres query
// const { Pool } = require("pg");
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// app.get("/db", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("select * from anohana");
//     const results = { results: result ? result.rows : null };
//     res.send(results);
//     client.release();
//   } catch (e) {
//     console.error(e);
//     res.send(e);
//   }
// });

//
// const pool = new Pool({ connectionString: process.env.DATABASE_URL || 'postgresql://postgres:@localhost:5432/', ssl: process.env.DATABASE_URL ? true : false })
// In your code, you add this snippet with the credentials and connection string details, here process.env.DATABASE_URL comes from environment file, if it is there as it will enable ssl mode, else in local without ssl it works.
//

//create api endpoint and handle GET requests to the /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//practice using config vars
// let showTimes = () => {
//   let result = "";
//   const times = process.env.TIMES || 5;
//   for (let i = 0; i < times; i++) {
//     result += i + " ";
//   }
//   return result;
// };
// app.get("/times", (req, res) => {
//   res.send(showTimes());
// });

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
