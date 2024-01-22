import express from "express";
import { getUpload, postUpload } from "../controllers/videosController";

const videosRouter = express();


// route는 post와 get을 한번에 쓸 수 있게 해주는 메서드
videosRouter.route('/upload').get(getUpload).post(postUpload);
export default videosRouter;