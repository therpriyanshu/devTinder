const express = require("express");
const app = express();

const shiftRouter = () => {
  app.use(
    "/user2",
    (req, res, next) => {
      next();
      console.log("user 2");
    },
    (req, res, next) => {
      next();
      console.log("user 3");
    },
    (req, res) => {
      res.send("Hello User 4");
      console.log("user 4");
    }
  );
  app.listen(7777, () => {
    console.log("server is running on port 7777");
  });
};

module.exports = { shiftRouter };
