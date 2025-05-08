import express from "express";
import cors from "cors";
import db from "./config/db.js";
import userRouter from "./controller/usersController.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

app.listen(port, () => console.log(`server start in ${port}`));
