import { NextFunction, Request, Response } from "express";
import { ErrorProtocol } from "../protocols";
import httpStatus from "http-status";

const errorHandlingMiddleware = async (
  err: ErrorProtocol,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { name, message, statusCode } = err;

  console.error(`${name}: ${message}`);

  res.status(statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({ message });
};

export default errorHandlingMiddleware;
