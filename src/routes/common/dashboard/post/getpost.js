import { Router } from "express";

import { getPostHandler } from "../../../../controllers/common/dashboard/post/getPost.js";
import Authenticate from "../../../../middleware/authenticate.js";

const router = Router();

router.get("/", Authenticate, getPostHandler);

export { router as getpostRouter };
