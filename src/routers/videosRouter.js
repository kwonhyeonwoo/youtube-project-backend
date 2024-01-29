import express from "express";
import { deleteVideo, getUpload, postEdit, postUpload, video, videoSearch } from "../controllers/videosController";

const videosRouter = express();


// route는 post와 get을 한번에 쓸 수 있게 해주는 메서드
videosRouter.route('/upload').get(getUpload).post(postUpload);
videosRouter.get('/', video);
videosRouter.post('/edit', postEdit);
videosRouter.post('/delete/:id', deleteVideo);
videosRouter.get('/search', videoSearch);
export default videosRouter;