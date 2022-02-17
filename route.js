const path = require("path");

module.exports = (app) => {
  //
  app.get("/api", (req, res) => {
    res.json({ message: "gm Express" });
  });

  //
  app.get("/theAnswer", (req, res) => {
    res.json({ theAnswer: "42" });
  });
};
