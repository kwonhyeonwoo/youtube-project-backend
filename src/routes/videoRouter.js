import express from "express";
import { getVideos, videoUpload, videoViews, viewBestApi } from "../controllers/videoController";
import { authenticate, videoFileaUpload } from "../middleware";

const videoRouter = express.Router();

videoRouter.post('/upload', videoFileaUpload.single('videoUrl'), authenticate, videoUpload);
videoRouter.get('/', getVideos);
videoRouter.post('/:id/views', videoViews)
videoRouter.get('/views', viewBestApi)
export default videoRouter