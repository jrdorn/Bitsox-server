#!/usr/bin/env node

const fetch = require("node-fetch");

const testPG = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://bitsox-server.herokuapp.com/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => resolve(json));
  });
};
(async () => {
  console.log(await testPG());
})();

// return new Promise((resolve, reject) => {
//   fetch(
//     `PG`,
//     {
//       method: "get",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }
//   )
//     .then((res) => res.json())

//     .then((json, err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(json);
//       }
//     });
// });
