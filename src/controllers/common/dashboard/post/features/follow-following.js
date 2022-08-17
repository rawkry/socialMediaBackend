//Dashboard User profile controller

// import { Request, Response } from "express";
import { User } from "../../../../../models/user.js";

const followFollowing = async (req, res) => {
  //follow & unfollow
  const currentUser = await User.findById(req.user._id);

  const userToFollow = await User.findById(req.params.id);
  if (
    currentUser.following.includes(userToFollow._id) &&
    userToFollow.followers.includes(currentUser._id)
  ) {
    const cuindex = currentUser.following.indexOf(userToFollow._id);
    const ufindex = userToFollow.followers.indexOf(currentUser._id);

    currentUser.following.splice(cuindex, 1);
    userToFollow.followers.splice(ufindex, 1);

    await currentUser.save();
    await userToFollow.save();
    return res.status(200).json({ success: true, message: "User unfollowed" });
  } else {
    currentUser.following.push(userToFollow.id);
    userToFollow.followers.push(currentUser.id);
    await currentUser.save();
    await userToFollow.save();
    return res.status(200).json({ success: true, message: "User followed" });
  }
};

export { followFollowing as followFollowingHandler };
