
import express, { urlencoded } from 'express';
import morgan from "morgan";
import cors from 'cors';
import globalRouter from './routers/globalRouter';
import videosRouter from './routers/videosRouter';
import usersRouter from './routers/usersRouter';

const app = express();

//morgan 설정
// 어떤 상태코드를 보내주었는지 로그를 찍어줌
app.use(morgan("dev"));

app.use(express.json());
// cors 설정
app.use(cors());

//router 설정
app.use('/', globalRouter)
app.use('/videos', videosRouter);
app.use('/users',usersRouter);

export default app;