//Dashboard User profile controller

// import { Request, Response } from "express";
import { User } from "../../../../models/user.js";

const getProfile = async (req, res) => {
  const getuser = await User.findById(req.params.id);

  res.send({
    user: getuser,
  });
};

export { getProfile as getUserHandler };
