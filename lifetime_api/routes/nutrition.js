const express = require("express");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;
    const nutritcreds = await Nutrition.listNutrition(id);
    return res.status(201).json({ nutrition: nutritcreds });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;

    const nutritcreds = req.body;
    console.log(nutritcreds);
    const nutrition = await Nutrition.PostNutrition(nutritcreds, id);
    return res.status(201).json({ nutrition: nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
