const { Server } = require("socket.io");

console.log("SERVER ");

const io = new Server(9000, {
  cors: {
    origin:"http://localhost:3000",},
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some(user => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = async(userId) => {
  return await users.find(user => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("addUser", userData => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.recieverId);
    io.to(user.socketId).emit("getMessage", data)
  });
});
