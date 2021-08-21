const jwt = require("jsonwebtoken");

///check auth token the request header =>

module.exports = (req, res, next) => {
  let header = req.get("Authorization");
  if (!header) {
    const error = new Error("token not found");
    error.statusCode = 401;
    throw error;
  }
  let token = header.split(" ")[1];
  let decodeToken;
  try {
    decodeToken = jwt.verify(token, "ghaithwfmTool&gradproject");
  } catch (err) {
    throw err;
  }

  if (!decodeToken) {
    const error = new Error("Invalid Login");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodeToken.userId;
  next();
};
