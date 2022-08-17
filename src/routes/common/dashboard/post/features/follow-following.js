import { Router } from "express";

import { followFollowingHandler } from "../../../../../controllers/common/dashboard/post/features/follow-following.js";
import Authenticate from "../../../../../middleware/authenticate.js";

const router = Router();

router.get("/follow/:id", Authenticate, followFollowingHandler);

export { router as followFollowingRouter };
