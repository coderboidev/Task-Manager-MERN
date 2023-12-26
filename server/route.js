const express = require("express");
const auth = require("./auth");
const {
  register,
  addTask,
  login,
  deleteTask,
  updateTask,
  getUserDetails,
} = require("./controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.put("/task", auth, addTask);
router.delete("/task/:id", auth, deleteTask);
router.put("/task/:id", auth, updateTask);
router.get("/me", auth, getUserDetails);

module.exports = router;
