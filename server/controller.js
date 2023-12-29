const User = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Name , Email and Password are required !" });
    }
    const userExixts = await User.findOne({ email });
    if (userExixts) {
      return res
        .status(400)
        .json({ msg: "This email is already registered !" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const result = await user.save();
    const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    // res.header("Access-Control-Allow-Credentials", true);
    return res.status(201).json({ msg: `Welcome ${result.name} !` });
  } catch (err) {
    res.status(400).json({ msg: "Error in register !", err: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: " Email and Password are required !" });
    }
    const userExixts = await User.findOne({ email });
    if (!userExixts) {
      return res.status(400).json({ msg: "Please register first !" });
    }
    const passwordMatched = await bcrypt.compare(password, userExixts.password);
    if (!passwordMatched) {
      return res.status(400).json({ msg: "Invalid credentials !" });
    }
    const token = jwt.sign({ token: userExixts._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "none",
      secure: false,
    });
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Credentials", true);
    return res.status(200).json({ msg: `Welcome back ${userExixts.name} !` });
  } catch (err) {
    res.status(400).json({ msg: "Error in login !", err: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      maxAge: Date.now(),
      httpOnly: true,
      sameSite: "none",
      secure: false,
    });
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Credentials", true);
    return res.status(200).json({ msg: ` ${userExixts.name} Logged out !` });
  } catch (err) {
    res.status(400).json({ msg: "Error in logout !", err: err.message });
  }
};

exports.addTask = async (req, res) => {
  try {
    const { task } = req.body;
    const taski = await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: { tasks: task },
      },
      { new: true }
    );
    res.status(201).json({ msg: "Task Created !", taski });
  } catch (err) {
    res.status(400).json({ msg: "Error in addTask !", err: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { task } = req.body;
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { tasks: task },
      },
      { new: true }
    );
    res.status(201).json({ msg: "Task Deleted !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in deleteTask !", err: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { newTask, oldTask } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const taskIndex = user.tasks.findIndex((task) => task === oldTask);
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
    user.tasks[taskIndex] = newTask;
    await user.save();
    res.status(201).json({ msg: "Task Updated !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in updateTask !", err: err.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    res.status(400).json({ msg: "Error in register !", err: err.message });
  }
};
