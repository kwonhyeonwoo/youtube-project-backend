import express from "express";
import { videoUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.post('/upload',videoUpload)