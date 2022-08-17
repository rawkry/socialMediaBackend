//Dashboard university routes exports from here

import { Router } from "express";

import { getAllUserRouter } from "./get-all.js";
import { createUserRouter } from "./create.js";
import { getUserRouter } from "./get.js";
import { LoginRouter } from "./login.js";

const router = Router();

router.use(getAllUserRouter);
router.use(getUserRouter);
router.use(createUserRouter);
router.use(LoginRouter);

export { router as indexUserRouter };
