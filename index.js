const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const expressServer = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
