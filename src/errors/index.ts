import { ErrorProtocol } from "../protocols";
import httpStatus from "http-status";

const conflictError = (item: string): ErrorProtocol => {
  return {
    name: "ConflictError",
    message: `${item} already exists`,
    statusCode: httpStatus.CONFLICT,
  };
};

const notFoundError = (resource?: string): ErrorProtocol => {
  return {
    name: "NotFoundError",
    message: `${resource || "Resource"} was not found`,
    statusCode: httpStatus.NOT_FOUND,
  };
};

const invalidBodyError = (message: string): ErrorProtocol => {
  return {
    name: "InvalidBodyError",
    message,
    statusCode: httpStatus.BAD_REQUEST,
  };
};

const internalServerError = (): ErrorProtocol => {
  return {
    name: "InternalServerError",
    message: "Internal Server Error",
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
  };
};

const unavailableProductError = (): ErrorProtocol => {
  return {
    name: "UnavailableProductError",
    message: "Product is not available anymore",
    statusCode: httpStatus.CONFLICT,
  };
};

const errors = {
  conflictError,
  notFoundError,
  invalidBodyError,
  internalServerError,
  unavailableProductError,
};

export default errors;
