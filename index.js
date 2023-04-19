const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

const buyNsp = io.of("/buy");
const sellNsp = io.of("/sell");

buyNsp.on("connection", (socket) => {
  buyNsp.emit("myEvent", "hello buy");
});

sellNsp.on("connection", (socket) => {
  sellNsp.emit("myEvent", "hello sell");
});

// io.on("connection", (socket) => {
//   console.log("New User Connected");

//   io.sockets.emit("myBroadcast", "Hello Everyone!");

//   socket.on("myEvent", (msg) => {
//     console.log(msg);
//   });
//   socket.on('message', (msg)=> {
//     console.log(msg);
//   })

//   setInterval(() => {
//     const d = new Date();
//     const t = d.getTime();
//     socket.emit("myEvent", t);
//   }, 10);
//   setInterval(() => {
//     const d = new Date();
//     const t = d.getTime();
//     socket.send(t);
//   }, 1000);

//   setTimeout(() => {
//     socket.send("Learning socket.io (server-->client)");
//   }, 5000);
//   socket.on("disconnect", () => {
//     console.log("User Disconnected");
//   });
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
