import express from "express";
import { authAccount, authLogin } from "../controllers/authController";


const rootRouter = express();
rootRouter.post('/account', authAccount)
rootRouter.post('/login', authLogin);


export default rootRouter;