const express = require("express");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    var { user } = res.locals.user;
    const nutrits = await Nutrition.listNutrition(user);
    return res.status(200).json({ nutrition: nutrits });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
