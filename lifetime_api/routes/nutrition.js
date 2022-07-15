const express = require("express");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    var { user } = res.locals;
    const nutritcreds = await Nutrition.listNutrition(user);
    return res.status(200).json({ nutrition: nutritcreds });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    var { user } = res.locals;

    const nutritcreds = req.body;
    const nutriton = await Nutrition.listNutrition({ nutritcreds, user });
    return res.status(200).json({ nutrition: nutriton });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
