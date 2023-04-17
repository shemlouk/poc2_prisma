import { addProduct, removeProduct } from "../controllers";
import { Router } from "express";

const cartRouter = Router();

cartRouter
  .post("/add/:productId", addProduct)
  .patch("/remove/:productId", removeProduct);

export default cartRouter;
