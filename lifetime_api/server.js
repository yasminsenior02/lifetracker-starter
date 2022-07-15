const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth");
const NutritRouter = require("./routes/nutrition");
const ExerciseRouter = require("./routes/exercise");
const security = require("./security");

const { PORT } = require("./config");
const { BadRequestError, NotFoundError } = require("./utils/error");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/auth", authRouter);
app.use(security.extractUserFromJwt);
app.use("/nutrition", NutritRouter);
app.use("/exercise", ExerciseRouter);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  console.log(err.stack);
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀Server running http://localhost:${PORT}`);
});
