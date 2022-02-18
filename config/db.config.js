//PostgreSQL db and Sequelize

/**
 * Id, Email, Password
 * profile pic, full name, shipping address, 2FA (boolean), newsletter(boolean). wishlist
 */

// //init Heroku Postgres client
// const { Client } = require("pg");
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// //log db rows
// client.connect();
// client.query(
//   "SELECT table_schema,table_name FROM information_schema.tables;",
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );

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
// In your code, you add this snippet with the credentials and connection string details,
// here process.env.DATABASE_URL comes from environment file, if it is there as
//  it will enable ssl mode, else in local without ssl it works.
//

//
//
//
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
