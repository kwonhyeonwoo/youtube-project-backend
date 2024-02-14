import express from "express";
import { account, login, userProfile } from "../controllers/authController";
import { authenticate, avatarUpload } from "../middleware";

const rootRouter = express.Router();

rootRouter.post('/account', avatarUpload.single('avatar'), account);
rootRouter.post('/login',login);
rootRouter.get('/profile',authenticate, userProfile);
export default rootRouter;