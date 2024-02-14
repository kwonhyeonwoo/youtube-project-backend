import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser"

import "./db.js";
import "./models/Auth.js";
import rootRouter from "./routes/rootRouter.js";
export const app = express();

app.use(bodyParser.json());

// morgan ->로그를 남겨주는 모듈
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/', rootRouter);
app.listen(4000, () => {
    console.log('ServerOpen : http://localhost:4000')
})