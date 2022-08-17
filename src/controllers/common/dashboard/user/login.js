//Dashboard User profile controller

// import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../../../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const login = async (req, res) => {
  dotenv.config();

  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
  const token = await user.generateToken();
  res
    .status(200)
    .cookie("token", token)

    .json({
      success: true,
      user,
      accessToken: token,
    });
};

export { login as LoginHandler };
