import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth.js";

const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running http://localhost:$(PORT)`);
});
