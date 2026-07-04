const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("editor-change", (data) => {
    socket.broadcast.emit("editor-change", data);
  });
});
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});




