import { Router } from "express";
import userRouter from "./user"
import contentRouter from "./contents";
import shareRouter from "./share";

const router = Router();

// '/api/v1/...' requests goes to the 'userRouter'.
router.use("/user", userRouter);
router.use("/dashboard", contentRouter);
router.use("/brain", shareRouter);

export default router;