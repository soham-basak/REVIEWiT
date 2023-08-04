import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Register new user
// route POST /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
  // Getting name, email, password from body
  const { name, email, password } = req.body;

  // Check if the user is already registered by email
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404).json({ message: "Already registered" });
  }

  // craeting the user
  const user = await User.create({
    name,
    email,
    password,
  });

  // responsing the user details that is created
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Ivalid User Data" });
  }
});

// @desc Register new user
// route POST /api/users/auth
// @access public

const loginUser = asyncHandler(async (req, res) => {
  // Getting  email, password from body
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else [res.status(400).json({ message: "Invalid Credentials" })];
});

// @desc Logout User
// route POST /api/users/logout
// access public

const logOutUser = asyncHandler(async (req, res) => {
  // To sets a new cookie in the response to clear the JWT cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out" });
});

// @desc Get user profile
// route GET /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

export { registerUser, loginUser, logOutUser };
