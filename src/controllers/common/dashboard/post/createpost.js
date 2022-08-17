//Dashboard User profile controller

// import { Request, Response } from "express";
import { Post } from "../../../../models/post.js";
import { User } from "../../../../models/user.js";
import cloudinary from "cloudinary";
// import { PostComment } from "../../../../models/user-comment.js";

const createPost = async (req, res) => {
  cloudinary.config({
    cloud_name: "dkd5g1km9",
    api_key: "349199614565296",
    api_secret: "TIrHZBugG-TiuF65AEvFCRxTgeI",
  });

  const file = req.files.image;
  try {
    cloudinary.v2.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      const newPost = new Post({
        caption: req.body.caption,
        image: result.url,
        owner: req.user._id,
      });
      newPost.save((err, post) => {
        if (err) {
          console.log(err);
        }
        User.findById(req.user._id, (err, user) => {
          user.posts.push(post._id);
          user.save();

          res.status(200).json({ success: true, message: "Post created" });
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};
// const user = User.findById(req.user._id);
// user.posts.push(newPost._id);
export { createPost as createPostHandler };
