import prisma from "../../config/database";
import { Prisma } from "@prisma/client";

const create = async (data: Prisma.ProductUncheckedCreateInput) => {
  return prisma.product.create({ data });
};

const findById = async (id: number) => {
  return prisma.product.findUnique({ where: { id } });
};

const updateProductQuantity = async (id: number, amount: number) => {
  return prisma.product.update({
    where: { id },
    data: { quantity: { increment: amount } },
  });
};

const productRepository = { create, findById, updateProductQuantity };

export default productRepository;
