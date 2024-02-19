import express from "express";
import { authenticate, avatarUpload } from "../middleware";
import { authEdit } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post('/edit', authenticate,avatarUpload.single('avatar'), authEdit);

export default authRouter;