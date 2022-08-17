//Dashboard User profile controller

// import { Request, Response } from "express";
import { User } from "../../../../models/user.js";

const getAllUser = async (req, res) => {
  const usersData = await User.find();

  res.send(usersData);
};

export { getAllUser as getAllUserHandler };
