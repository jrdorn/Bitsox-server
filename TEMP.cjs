#!/usr/bin/env node

const fetch = require("node-fetch");

const testPG = () => {
  return fetch(`https://bitsox-server.herokuapp.com/users`);
};
(async () => {
  console.log(await testPG());
})();
