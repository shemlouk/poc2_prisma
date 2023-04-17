import userRouter from "./user-router";
import cartRouter from "./cart-router";
import { Router } from "express";

const router = Router();

router.use("/user", userRouter).use("/cart", cartRouter);

export default router;
