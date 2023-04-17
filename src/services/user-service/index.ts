import { IUserRepository } from "../../protocols";
import { CreateUser } from "../../schemas";
import errors from "../../errors";

const create = async (data: CreateUser, repository: IUserRepository) => {
  const emailFound = await repository.findByEmail(data.email);
  if (emailFound) throw errors.conflictError("Email");

  return await repository.create(data);
};

const userService = { create };

export default userService;
