import idGenerator from "../../utils/id-generator";
import { IUserRepository } from "../../protocols";
import { Prisma, User } from "@prisma/client";

const inMemoryUserDatabase: User[] = [];

const create = async (data: Prisma.UserUncheckedCreateInput) => {
  const newData: User = { ...data, id: idGenerator.next().value };
  inMemoryUserDatabase.push(newData);
  return newData;
};

const findByEmail = async (email: string) => {
  const [user] = inMemoryUserDatabase.filter((u) => u.email === email);
  return user === undefined ? null : user;
};

const findById = async (id: number) => {
  const [user] = inMemoryUserDatabase.filter((u) => u.id === id);
  return user === undefined ? null : user;
};

const inMemoryUserRepository: IUserRepository = {
  create,
  findByEmail,
  findById,
};

export default inMemoryUserRepository;
