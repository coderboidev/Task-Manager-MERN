const User = require("./model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      return res.status(400).json({ msg: "No token in cookie !" });
    }
    const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
    const user = await User.findById(decoded?.token).select("-password");
    if (!user) {
      return res.status(400).json({ msg: "No user found !" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Error in auth !", err: err.message });
  }
};

module.exports = auth;
