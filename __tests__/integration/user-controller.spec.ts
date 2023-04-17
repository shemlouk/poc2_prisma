import httpStatus from "http-status";
import app from "../../src/app";
import request from "supertest";

describe("Create user (controller)", () => {
  it("Should be able to create a new user and return it", async () => {
    const newUser = {
      name: "test-integration1",
      email: "test-integration1@test.com",
    };

    const response = await request(app).post("/user/signup").send(newUser);

    expect(response.status).toBe(httpStatus.CREATED);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create a already existing user", async () => {
    const newUser = {
      name: "test-integration2",
      email: "test-integration2@test.com",
    };

    await request(app).post("/user/signup").send(newUser);
    const response = await request(app).post("/user/signup").send(newUser);

    expect(response.status).toBe(httpStatus.CONFLICT);
  });
});
