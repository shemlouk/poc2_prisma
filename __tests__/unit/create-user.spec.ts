import inMemoryUserRepository from "../../src/repositories/user-repository/in-memory";
import userService from "../../src/services/user-service";
import { Prisma } from "@prisma/client";
import errors from "../../src/errors";

describe("Create user (service)", () => {
  it("Should create a new user and return it", async () => {
    const newUser: Prisma.UserUncheckedCreateInput = {
      name: "test",
      email: "test@test.com",
    };

    const newUserReturned = await userService.create(
      newUser,
      inMemoryUserRepository
    );

    expect(newUserReturned).toHaveProperty("id");
  });

  it("Should not be able to create an already existing user", async () => {
    const newUser: Prisma.UserUncheckedCreateInput = {
      name: "testduplicate",
      email: "testduplicate@test.com",
    };

    await userService.create(newUser, inMemoryUserRepository);

    await expect(
      userService.create(newUser, inMemoryUserRepository)
    ).rejects.toEqual(errors.conflictError("Email"));
  });
});
