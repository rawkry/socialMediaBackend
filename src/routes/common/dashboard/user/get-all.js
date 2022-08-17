import { Router } from "express";

import { getAllUserHandler } from "../../../../controllers/common/dashboard/user/get-all.js";
// import { Authenticate } from "../../../../middleware/authenticate.js";

const router = Router();

router.get(
  "/",
  
  getAllUserHandler
);

export { router as getAllUserRouter };
