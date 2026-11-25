
import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT = Number(process.env.PORT);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Server is Live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
