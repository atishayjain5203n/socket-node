const io = require("socket.io")({
    path: "/test",
    serveClient: false,
  });
  
  // either
  const server = require("http").createServer();
  
  io.attach(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
  });
  io.on('connection', (socket) =>{
    console.log("hello")
  })
  
  server.listen(3000);
  console.log("started")