import prisma from "../../config/database";
import { Prisma } from "@prisma/client";

const create = async (data: Prisma.UserUncheckedCreateInput) => {
  return prisma.user.create({ data });
};

const findByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

const findById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

const userRepository = { create, findByEmail, findById };

export default userRepository;
