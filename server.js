<<<<<<< HEAD

let express = require("express");
let app = express();
let httpServer = require("http").createServer(app);

const cors = require("cors");
let connections = [];


app.use(cors());

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:4200", // Replace with your Angular app's URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {

  socket.on("draw", (data) => {

    io.emit("draw", data);
  });


});

app.use(express.static("public"));

let PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Define a connection event
io.on('connection', (socket) => {
  console.log('User connected');

  // Handle drawing data
  socket.on('draw', (data) => {
    // Broadcast the drawing data to all connected clients
    socket.broadcast.emit('draw', data);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
>>>>>>> origin/main
