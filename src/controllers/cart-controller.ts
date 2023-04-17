import { NextFunction, Request, Response } from "express";
import cartService from "../services/cart-service";
import httpStatus from "http-status";

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = Number(req.headers.userid);
  const productId = Number(req.params.productId);

  if (!userId || !productId) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const updatedCart = await cartService.addProductToCart(userId, productId);
    res.send(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const removeProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = Number(req.headers.userid);
  const productId = Number(req.params.productId);

  if (!userId || !productId) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const updatedCart = await cartService.removeProductFromCart(
      userId,
      productId
    );
    res.send(updatedCart);
  } catch (error) {
    next(error);
  }
};
