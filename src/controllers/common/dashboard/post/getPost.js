import { Post } from "../../../../models/post.js";

const getPost = async (req, res) => {
  try {
    const postData = await Post.find();

    res.send(postData);
  } catch (error) {
    res.send({ erroe: error });
  }
};

export { getPost as getPostHandler };
