
import express, { urlencoded } from 'express';
import MongoStore from "connect-mongo";

import morgan from "morgan";
import cors from 'cors';
import rootRouter from './routers/rootRouter';
import videosRouter from './routers/videosRouter';
import authRouter from './routers/authRouter';
import session from "express-session";
import { localMiddleWare } from './miiddleware';

const app = express();

//morgan 설정
// 어떤 상태코드를 보내주었는지 로그를 찍어줌
app.use(morgan("dev"));

app.use(session({
    secret: 'kong',
    resave: true,
    saveUninitialized: false,
    cookie:{
        secure: false,   
        httpOnly:true,
    },
    store:MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/mystudybac"
    })
})
)
app.use(localMiddleWare);
app.use("/",(req,res,next)=>{
    console.log('req session user', req.session.loggedIn);
    next(); 
})
app.use(express.json());
// cors 설정
app.use(cors());

//router 설정
app.use('/', rootRouter)
app.use('/videos', videosRouter);
app.use('/users', authRouter);

export default app;