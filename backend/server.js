import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.route.js";
import connectDB from "./db/mongodb.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/auth", AuthRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
