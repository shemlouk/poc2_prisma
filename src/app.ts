import errorHandlingMiddleware from "./middlewares/error-handling-middleware";
import router from "./routers";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app
  .use(express.json())
  .use(cors())
  .use(router)
  .use(errorHandlingMiddleware);

export default app;
