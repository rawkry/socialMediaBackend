import { Router } from "express";
import { postCommentHandler } from "../../../../../controllers/common/dashboard/post/features/post-comment.js";

import Authenticate from "../../../../../middleware/authenticate.js";

const router = Router();

router.post("/comment/:id", Authenticate, postCommentHandler);

export { router as postCommentRouter };
