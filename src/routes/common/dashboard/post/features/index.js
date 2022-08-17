import { Router } from "express";

import { likeUnlikeRouter } from "./like-unlike.js";
import { followFollowingRouter } from "./follow-following.js";
import { postCommentRouter } from "./post-comment.js";

const router = Router();

router.use(likeUnlikeRouter);
router.use(followFollowingRouter);
router.use(postCommentRouter);

export { router as indexFeaturesRouter };
