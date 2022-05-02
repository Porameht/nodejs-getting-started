const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello Frank i am NodeJS");
});

server.listen(8000, () => {
  console.log("Server Connect...");
});
