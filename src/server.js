import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser"
import rootRouter from "./routes/rootRouter.js";
import videoRouter from "./routes/videoRouter.js";

import "./db.js";
import "./models/Auth.js";
import authRouter from "./routes/authRouter.js";
export const app = express();

app.use(bodyParser.json());

// morgan ->로그를 남겨주는 모듈
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

// avatar 이미지 파일 경로 설정
app.use("/uploads", express.static('uploads'))
app.use("/uploads", express.static('videos'))
app.use('/', rootRouter);
app.use('/video', videoRouter);
app.use('/auth', authRouter);

// node open
app.listen(4000, () => {
    console.log('ServerOpen : http://localhost:4000')
})