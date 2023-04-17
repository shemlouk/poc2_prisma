import { NextFunction, Request, Response } from "express";
import userService from "../services/user-service";
import httpStatus from "http-status";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userCreated = await userService.create(req.body);
    res.status(httpStatus.CREATED).send(userCreated);
  } catch (error) {
    next(error);
  }
};
