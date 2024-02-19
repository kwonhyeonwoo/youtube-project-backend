import express from "express";
import { getVideos, videoUpload } from "../controllers/videoController";
import { authenticate, videoFileaUpload } from "../middleware";

const videoRouter = express.Router();

videoRouter.post('/upload', videoFileaUpload.single('videoUrl'), authenticate, videoUpload);
videoRouter.get('/', getVideos);
export default videoRouter