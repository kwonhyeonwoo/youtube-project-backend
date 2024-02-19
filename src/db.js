import mongoose from "mongoose";
import "./models/Auth"
import "./models/Video"
mongoose.connect("mongodb://127.0.0.1:27017/mystudybac");

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);