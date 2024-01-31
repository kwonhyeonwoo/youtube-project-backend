
import express from 'express';
import MongoStore from "connect-mongo";

import morgan from "morgan";
import cors from 'cors';
import rootRouter from './routers/rootRouter';
import videosRouter from './routers/videosRouter';
import authRouter from './routers/authRouter';
import session from "express-session";
import cookieParser from "cookie-parser";
import { localMiddleWare } from './miiddleware';

const app = express();

app.use(morgan("dev"));
// cors 설정
app.use(cors(
    { 
        origin: 'http://localhost:3000',
        credentials:true,
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
     }));

app.use(session({
    secret:"djklfsjklfjslk2020202020a;a;a",
    saveUninitialized:false,
    resave: false,
    cookie: {
        httpOnly: true,
        sameSite: 'none', // 또는 'None'과 함께 secure: true를 사용
        maxAge: 5300000,
        secure: false,
        domain: 'localhost',

    },
    store:MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/mystudybac"
    })
}));

app.use(express.json());
// app.use(localMiddleWare);

app.get("/",(req, res, next) => {
    console.log('sessions', req.session)
    console.log('sessions user', req.session.user)
    req.sessionStore.all((error, sessions) => {
        
    });
});
//router 설정
app.use('/', rootRouter)
app.use('/videos', videosRouter);
app.use('/users', authRouter);


export default app;