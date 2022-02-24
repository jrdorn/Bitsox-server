//connect from app to Postgres db
const { Pool } = require("pg");
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

/** You can enable multiple statements in your pool config multipleStatements: true on construction of your pool and then take advantage of transactions.
BEGIN;
INSERT ...;
SELECT LAST_INSERT_ID() INTO @lastId;
UPDATE ...;
COMMIT;
 */

//get list of users in database: [ { id: 0, email: '', password: '' } ]
const getUsers = () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  return new Promise((resolve, reject) => {
    pool
      .connect()
      .then((client) => {
        return client.query(`SELECT * FROM Users;`).then((res) => {
          client.release();
          resolve(res.rows);
        });
      })
      .catch((e) => {
        client.release();
        reject(e);
      });
  });
};

module.exports = getUsers;
