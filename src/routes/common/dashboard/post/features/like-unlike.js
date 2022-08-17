import { Router } from "express";

import { likeUnlikeHandler } from "../../../../../controllers/common/dashboard/post/features/like-unlike.js";
import Authenticate from "../../../../../middleware/authenticate.js";

const router = Router();

router.get(
  "/:id",
  Authenticate,
  likeUnlikeHandler
);

export { router as likeUnlikeRouter };
