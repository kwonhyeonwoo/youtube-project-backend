import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{type:String, required:true, maxLength:100},
    description:{type:String, required:true, maxLength:150},
    createAt:{type:Number},
    hashtags:[{type:String, trim:true, required:true}],
    meta:{
        views:{type:Number, default:0},
        rating:{type:Number, default:0},
    }
});

const Video = mongoose.model('Video',videoSchema);

export default Video;