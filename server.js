
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
