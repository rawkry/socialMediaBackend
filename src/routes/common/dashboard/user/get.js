import { Router } from "express";

import { getUserHandler } from "../../../../controllers/common/dashboard/user/get.js";



const router = Router();

router.get(
  "/:id",
 
 
  getUserHandler
);

export { router as getUserRouter };
