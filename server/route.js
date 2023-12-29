const express = require("express");
const auth = require("./auth");
const {
  register,
  addTask,
  login,
  deleteTask,
  updateTask,
  getUserDetails,
  logout,
} = require("./controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.put("/task", auth, addTask);
router.put("/task/delete", auth, deleteTask);
router.put("/task/update", auth, updateTask);
router.get("/me", auth, getUserDetails);

module.exports = router;
