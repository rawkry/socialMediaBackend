//Dashboard User profile controller

// import { Request, Response } from "express";
import { User } from "../../../../../models/user.js";
import { Post } from "../../../../../models/post.js";

const postComment = async (req, res) => {
  console.log("working");
  //comment
  const currentUser = await User.findById(req.user._id);
  const posts = await Post.findById(req.params.id);
  const newComment = {
    comment: req.body.comment,
    user: currentUser._id,
  };
  posts.comments.push(newComment);
  await posts.save();
  return res.status(200).json({ success: true, message: "Comment added" });
};

export { postComment as postCommentHandler };
