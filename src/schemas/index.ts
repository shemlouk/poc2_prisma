import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type CreateUser = z.infer<typeof createUserSchema>;

export const createProductSchema = z.object({
  name: z.string(),
  price: z.number().positive().multipleOf(0.01),
  quantity: z.number().positive().optional(),
});

export type CreateProduct = z.infer<typeof createProductSchema>;
