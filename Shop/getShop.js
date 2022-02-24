/**
 
 client GET inventory => server gets inventory from database => 
 
 validate: drop those where sold is true


 id | name  | price |  description   | quantity | sold 
----+-------+-------+----------------+----------+------
  1 | sock1 | $3.50 | a white sock   |        3 | f
  2 | sock2 | $3.50 | a purple sock  |        3 | f
  3 | sock3 | $3.50 | a red sock     |        3 | f
  4 | sock4 | $3.50 | a blue sock    |        1 | f
  5 | sock5 | $3.50 | an orange sock |        1 | f
  6 | sock6 | $3.50 | a teal sock    |        1 | f
  7 | sock7 | $3.50 | a brown sock   |        1 | f
  8 | sock8 | $3.50 | a gold sock    |        1 | f
  9 | sock9 | $3.50 | a green sock   |        1 | t
(9 rows)




INSERT INTO Shop(Name, Price, Description, Quantity, Sold) Values('sock5', '3.50', 'an orange sock', 1, FALSE);

SELECT * FROM Shop;

UPDATE Shop
SET sold = true
WHERE id = 9;

DELETE FROM Shop
WHERE id = 1;


 */

//connect from app to Postgres db
const { Pool } = require("pg");

// get a list of items and their properties
const getShop = () => {
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
        return client.query(`SELECT * FROM Shop;`).then((res) => {
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

module.exports = getShop;
