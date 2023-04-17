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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
