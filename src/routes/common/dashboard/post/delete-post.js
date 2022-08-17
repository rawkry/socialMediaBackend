import { Router } from "express";

import { deletePostHandler } from "../../../../controllers/common/dashboard/post/delete-post.js";
import Authenticate from "../../../../middleware/authenticate.js";

const router = Router();

router.delete("/:id", Authenticate, deletePostHandler);

export { router as deletePostRouter };
