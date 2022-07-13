import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth";
const { PORT } = require("./config");
const { BadRequestError, NotFoundError } = require("./utils/errors");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀Server running http://localhost:${PORT}`);
});
