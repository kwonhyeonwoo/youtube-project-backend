import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mystudybac")

const db = mongoose.connection;

db.on('error',(error)=>console.log('DB ERROR:',error));
db.once('open',()=>console.log('DATABASE Connection!'));