import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import AuthRoutes from "./routes/auth.route.js";
import MessageRoutes from "./routes/message.route.js";
import UserRoutes from "./routes/user.route.js";
import connectDB from "./db/mongodb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use("/api/message", MessageRoutes);
app.use("/api/user", UserRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
