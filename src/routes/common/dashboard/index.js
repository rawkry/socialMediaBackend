/**
 * All dashboard routes exported from this index.
 */

import { Router } from "express";

import { indexUserRouter } from "./user/index.js";
import { indexPostRouter } from "./post/index.js";
import { indexFeaturesRouter } from "./post/features/index.js";

const router = Router();

router.use("/api/v1/users", indexUserRouter);
router.use("/api/v1/post", indexPostRouter);
router.use("/api/v1/post/features", indexFeaturesRouter);

export { router as indexDashboardRouter };
