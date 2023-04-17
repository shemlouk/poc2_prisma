import validationMiddleware from "../middlewares/validation-middleware";
import { createUserSchema } from "../schemas";
import { createUser } from "../controllers";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", validationMiddleware(createUserSchema), createUser);

export default userRouter;
