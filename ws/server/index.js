const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });

server.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (message) => {
    socket.send(
      `'${message}' => received at server through socket and I am sending this from the server`
    );
  });
});
