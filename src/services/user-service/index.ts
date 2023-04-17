import userRepository from "../../repositories/user-repository";
import { CreateUser } from "../../schemas";
import errors from "../../errors";

const create = async (data: CreateUser) => {
  const emailFound = await userRepository.findByEmail(data.email);
  if (emailFound) throw errors.conflictError("Email");

  return await userRepository.create(data);
};

const userService = { create };

export default userService;
