import express from "express";
import { account } from "../controllers/authController";
import multer from "multer";
 const avatarUpload = multer({ dest: "uploads/avatar" })

const rootRouter = express.Router();

rootRouter.post('/account',avatarUpload.single('avatar'), account)
export default rootRouter;