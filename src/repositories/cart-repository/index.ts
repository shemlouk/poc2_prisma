import prisma from "../../config/database";
import { Product } from "@prisma/client";

const connectProduct = async (userId: number, { id, price }: Product) => {
  return prisma.cart.upsert({
    where: { userId },
    create: {
      userId,
      total: price,
      quantity: 1,
      products: { connect: { id } },
    },
    update: {
      quantity: { increment: 1 },
      total: { increment: price },
      products: { connect: { id } },
    },
  });
};

const disconnectProduct = async (userId: number, { id, price }: Product) => {
  return prisma.cart.update({
    where: { userId },
    data: {
      quantity: { decrement: 1 },
      total: { decrement: price },
      products: { disconnect: { id } },
    },
  });
};

const findByUserId = async (userId: number) => {
  return prisma.cart.findUnique({
    where: { userId },
    include: { products: true },
  });
};

const cartRepository = { connectProduct, disconnectProduct, findByUserId };

export default cartRepository;
