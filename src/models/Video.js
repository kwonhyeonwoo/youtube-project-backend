import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    videoUrl: { type: String },
    title: { type: String, minlength: 5, maxlength: 15, required: true },
    description: { type: String, maxlength: 10, maxlength: 200, required: true },
    hashtags: [{ type: String, maxlength: 10, }],
    meta: {
        views: { default: 0, type: Number },
    },
    dateTime: { type: Date, default: Date.now },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Auth"
    }
});


const Video = mongoose.model("Video", videoSchema);
export default Video;