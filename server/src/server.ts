import express from "express";
import http from "http";
import { Server } from "socket.io";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "../../types";

const app = express();

app.get("/", (_req, res) => {
  res.send({ uptime: process.uptime() });
});

const server = http.createServer(app);
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {
  cors: {
    // origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {});

server.listen(4004, () => {
  console.log("Running at localhost:4004");
});
