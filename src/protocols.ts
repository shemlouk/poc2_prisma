import { Prisma, User } from "@prisma/client";

export type ErrorProtocol = Error & { statusCode?: number };

export interface IUserRepository {
  create: (data: Prisma.UserUncheckedCreateInput) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (id: number) => Promise<User | null>;
}
