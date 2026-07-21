import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";

dotenv.config();
connectDB();

const app = express(); 
app.use(express.json()); 
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/contacts", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => res.send("server is running"));

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
