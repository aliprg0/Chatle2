import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
<<<<<<< HEAD
=======
import cors from "cors";
import path from "path";
>>>>>>> main

import AuthRoutes from "./routes/auth.route.js";
import MessageRoutes from "./routes/message.route.js";
import UserRoutes from "./routes/user.route.js";
import connectDB from "./db/mongodb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
>>>>>>> main

const corsOptions = {
  origin: ["http://localhost:3000", "https://chatle2.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/message", MessageRoutes);
app.use("/api/user", UserRoutes);

<<<<<<< HEAD
=======
// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(process.cwd(), "frontend", "dist")));
}

const PORT = process.env.PORT || 5000;

>>>>>>> main
server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
