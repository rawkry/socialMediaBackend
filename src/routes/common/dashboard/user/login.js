import { Router } from "express";

import { LoginHandler } from "../../../../controllers/common/dashboard/user/login.js";


const router = Router();

router.post(
  "/login",
 
  LoginHandler
);

export { router as LoginRouter };
