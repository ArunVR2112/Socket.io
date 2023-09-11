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
