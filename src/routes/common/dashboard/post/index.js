import { Router } from "express";

import { createpostRouter } from "./createpost.js";
import { getpostRouter } from "./getpost.js";
import { deletePostRouter } from "./delete-post.js";

// import { postCommentRouter } from "./post-comment.js";

const router = Router();

router.use(createpostRouter);
router.use(getpostRouter);
router.use(deletePostRouter);

export { router as indexPostRouter };
