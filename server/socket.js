// const User = require("./models/User");
// const jwt = require("jsonwebtoken");

import User from "./models/user.js";
import jwt from "jsonwebtoken";
export default (io) => {
  io.on("connection", (socket) => {
    if (io.req) {
      socket.broadcast.emit("friend-login-status", { user_id: io.req.userId });
      addSocketIdInDB(socket.id, io.req.userId);

      socket.on("disconnect", () => {
        socket.broadcast.emit("friend-logout-status", {
          user_id: io.req.userId,
        });
        io.req.userId = null;
      });
    }
  });
};

async function addSocketIdInDB(socket_id, user_id) {
  const user = await User.findById(user_id);
  if (socket_id) {
    user.socketId = socket_id;
  }
  await user.save();
}
