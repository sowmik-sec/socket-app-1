const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");

  setTimeout(() => {
    socket.send("Learning socket.io (server-->client)");
  }, 5000);
  //   socket.on("disconnect", () => {
  //     console.log("User Disconnected");
  //   });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
