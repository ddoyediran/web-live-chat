const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();

const port = 5500;

const wss = new WebSocketServer({
  port: 5505,
});

app.get("/", (req, res) => {
  return res.send("Welcome home!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
