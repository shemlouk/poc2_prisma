import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import errors from "../errors";

const validationMiddleware = (schema: ZodSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        const message = result.error.issues
          .map((e) => `${e.path[0]}: ${e.message}`)
          .join(", ");

        throw errors.invalidBodyError(message);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validationMiddleware;
