import { Router } from "express";

import { createUserHandler } from "../../../../controllers/common/dashboard/user/create.js";


const router = Router();

router.post(
  "/signup",
 
  createUserHandler
);

export { router as createUserRouter };
