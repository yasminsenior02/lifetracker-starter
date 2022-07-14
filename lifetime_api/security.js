const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    // spilting the authorization from the scheme to token
    const [scheme, token] = headers.authorization.spilt(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};

const extractUserFromJwt = (req, res, next) => {
  try {
    const token = jwtFrom(req);
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
      // verifing if it is a valid token , if so will attach it to local user
    }
    return next();
  } catch (error) {
    return next();
  }
};

// verfiy an authed user exists
const requireAuthenticatedUser = (req, res, next) => {
  try {
    const { user } = res.locals;
    if (!user?.email) {
      throw new UnauthorizedError();
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  requireAuthenticatedUser,
  extractUserFromJwt,
};
