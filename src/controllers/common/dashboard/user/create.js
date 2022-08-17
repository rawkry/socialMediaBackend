//Dashboard User profile controller

// import { Request, Response } from "express";
import { User } from "../../../../models/user.js";

const createProfile = async (req, res) => {
  const { name, email, password, cPassword } = req.body;

  try {
    const userexist = await User.findOne({ email: email });
    if (userexist)
      return res.status(400).json({ error: "User already exists" });

    if (password !== cPassword)
      return res.status(400).json({ error: "Password does not match" });

    const newUser = new User({
      name,
      email,
      password,
      cPassword,
    });

    await newUser.save();

    return res.json({ success: true });
  } catch (err) {
    return res.json({ error: err });
  }
};

export { createProfile as createUserHandler };
