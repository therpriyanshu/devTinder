const express = require("express");

function Routing() {
  const app = express(); // scoped properly

  // Order matters
  app.use("/hello/xyz", (req, res) => {
    res.send("Hello");
  });

  app.use("/hello", (req, res) => {
    res.send("Helloo");
  });

  app.use("/hii", (req, res) => {
    res.send("Hiiii");
  });

  // Example: /abc/123
  app.get("/abc/:userId", (req, res) => {
    console.log(req.params);
    res.send({ firstName: "Priyanshu", lastName: "Kumar" });
  });

  app.use("/", (req, res) => {
    res.send("Home Page");
  });

  app.listen(7777, () => {
    console.log("Server is running");
  });
}

module.exports = { Routing };
