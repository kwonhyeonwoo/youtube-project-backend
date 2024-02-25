import express from "express";
import { getVideos, videoUpload, videoViews } from "../controllers/videoController";
import { authenticate, videoFileaUpload } from "../middleware";

const videoRouter = express.Router();

videoRouter.post('/upload', videoFileaUpload.single('videoUrl'), authenticate, videoUpload);
videoRouter.get('/', getVideos);
videoRouter.post('/:id/views', videoViews)
export default videoRouter