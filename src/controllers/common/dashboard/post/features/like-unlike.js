//Dashboard User profile controller

// import { Request, Response } from "express";
import { Post } from "../../../../../models/post.js";
import { User } from "../../../../../models/user.js";
// import { PostComment } from "../../../../models/user-comment.js";

const likeUnlike = async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log(post);
  try {
    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);
      post.likes.splice(index, 1);
      await post.save();
      return res.status(200).json({ success: true, message: "Post unliked" });
    } else {
      post.likes.push(req.user._id);
      await post.save();
      return res.status(200).json({ success: true, message: "Post liked" });
    }
  } catch (e) {
    console.log(e);
  }
};

export { likeUnlike as likeUnlikeHandler };
