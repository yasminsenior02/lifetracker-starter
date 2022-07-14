const express = require("express");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const { createUserJwt } = require("../utils/tokens");
const security = require("../security");
const router = express.Router();

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);

    const publicUser = User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
