import express from "express";
import { account } from "../controllers/authController";

const rootRouter = express.Router();

rootRouter.post('/account', account)
export default rootRouter;