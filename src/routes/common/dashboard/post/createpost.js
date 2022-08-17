import { Router } from "express";

import { createPostHandler } from "../../../../controllers/common/dashboard/post/createpost.js";
import Authenticate from "../../../../middleware/authenticate.js";
const router = Router();

router.post("/upload", Authenticate, createPostHandler);

export { router as createpostRouter };
