import express from "express";
import { getAllUsers } from "../models/usersModel.js";

const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  getAllUsers((err, results) => {
    if (err) return res.status(500).send(err.message);
    res.json(results);
  });
});

export default userRouter;
