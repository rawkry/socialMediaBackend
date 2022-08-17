import { Post } from "../../../../models/post.js";
import { User } from "../../../../models/user.js";

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log(post);

  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }

  if (post.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to delete this post",
    });
  }
  await post.remove();
  const user = await User.findById(req.user._id);

  const index = user.posts.indexOf(req.params._id);
  user.posts.splice(index, 1);
  await user.save();

  res.status(200).json({ success: true, message: "Post deleted" });
};

export { deletePost as deletePostHandler };
