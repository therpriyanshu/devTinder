const express = require("express");

const app = express();

const method = () => {
  app.get("/get", (req, res) => {
    res.send("Successfully got data");
  });

  app.post(
    "/post",
    (req, res) => {
      res.send("Successfully post data");
    },
    (req, res) => {
      res.send("Successfully post data2");
    }
  );

  app.put("/put", (req, res) => {
    res.send("Successfully put data");
  });

  app.patch(
    "/patch",
    function (req, res) {
      res.send("Successfully patch data");
    },
    function (req, res) {
      res.send("Successfully patch data2");
    }
  );

  app.delete("/delete", (req, res) => {
    res.send("Successfully delete data");
  });

  app.listen(7777, () => {
    console.log("Listning on port 7777");
  });
};
module.exports = { method };
