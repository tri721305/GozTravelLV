// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";
// import planRoutes from "./routes/plans.js";
// import socket from "./socket.js";
// const app = express();
// // const httpServer = createServer(app);
// // const io = new Server(httpServer, { cors: { origin: "*" } });

// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// // app.use((req, res, next) => {
// //   io.req = req;
// //   req.io = io;
// //   next();
// // });

// app.use("/posts", postRoutes);
// app.use("/user", userRoutes);
// app.use("/plans", planRoutes);

// app.get("/", (req, res) => {
//   res.send("App is running");
// });
// // socket(io);
// //abc
// const CONNECTION_URL =
//   "mongodb+srv://admin:admin123@cluster0.1q1s7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//   })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import * as socket from "./socket.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import UserRoutes from "./routes/User.js";
import planRoutes from "./routes/plans.js";
import User from "./models/user.js";
import AuthRoutes from "./routes/auth.js";
// import UserRoutes from './routes/'
import PostRoutes from "./routes/post.js";
// import socketIo from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "UPDATE", "DELETE", "OPTIONS"],
  },
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  io.req = req;
  req.io = io;
  next();
});
// app.use("/api/auth", AuthRoutes);
// app.use("/posts", postRoutes);
// app.use("/user", userRoutes);
app.use("/plans", planRoutes);

app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/post", PostRoutes);
app.get("/", (req, res) => {
  res.send("App is running");
});

io.on("connection", (socket) => {
  console.log("hello world");
  if (io.req) {
    socket.broadcast.emit("friend-login-status", { user_id: io.req.userId });
    addSocketIdInDB(socket.id, io.req.userId);

    socket.on("disconnect", () => {
      console.log("connection");
      socket.broadcast.emit("friend-logout-status", {
        user_id: io.req.userId,
      });
      io.req.userId = null;
    });
  }
});

async function addSocketIdInDB(socket_id, user_id) {
  const user = await User.findById(user_id);
  if (socket_id) {
    user.socketId = socket_id;
  }
  await user.save();
}

// //abc
const CONNECTION_URL =
  "mongodb+srv://admin:admin123@cluster0.1q1s7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    server.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";

// import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";
// import planRoutes from "./routes/plans.js";

// const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.use("/posts", postRoutes);
// app.use("/user", userRoutes);
// app.use("/plans", planRoutes);

// app.get("/", (req, res) => {
//   res.send("App is running");
// });
// //abc
// const CONNECTION_URL =
//   "mongodb+srv://admin:admin123@cluster0.1q1s7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
