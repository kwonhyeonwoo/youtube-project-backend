import express from "express";
import { user } from "../controllers/authController";

const authRouter = express();

authRouter.get('/',user)


export default authRouter;