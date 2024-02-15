import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{type:String, minlength:5, maxlength:15, required:true},
    description:{type:String, maxlength:30, required:true},
    hashtags:[{type:String, maxlength:10, }],
    meta:{
        views:{default:0, type:Number},
    },
    dataTime:{type: new Date.now(),},
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});


const Video = mongoose.model("Video",videoSchema);
export default Video;