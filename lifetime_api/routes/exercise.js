const express = require("express");
const Exercise = require("../models/exercise");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;
    const exercise = await Exercise.listExercise(id);
    return res.status(201).json({ exercise: exercise });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;

    const exercise = req.body;
    const exercisee = await Exercise.PostExercise(exercise, id);
    return res.status(201).json({ exercise: exercisee });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
