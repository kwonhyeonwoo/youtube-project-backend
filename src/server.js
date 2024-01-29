
import express, { urlencoded } from 'express';
import morgan from "morgan";
import cors from 'cors';
import rootRouter from './routers/rootRouter';
import videosRouter from './routers/videosRouter';
import authRouter from './routers/authRouter';
import session from "express-session";

const app = express();

//morgan 설정
// 어떤 상태코드를 보내주었는지 로그를 찍어줌
app.use(morgan("dev"));

app.use(session({
    secret: 'kong',
    resave: false,
    saveUninitialized: true,
    cookie: {

    },
})
)
app.use((req, res, next) => {
    console.log('Session data:', req.session);
    console.log('Session dataid:', req.session.id);
    next(); // 다음 미들웨어로 이동
});
app.use(express.json());
// cors 설정
app.use(cors());

//router 설정
app.use('/', rootRouter)
app.use('/videos', videosRouter);
app.use('/users', authRouter);

export default app;