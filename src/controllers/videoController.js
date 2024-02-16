import Video from "../models/Video";

export const videoUpload = async(req,res)=>{
    const {
        body:{
            title,
            description,
            hashtags,
            videoUrl
        },
        file
    } = req;
    const createVideo = await Video.create({
        title,
        description,
        hashtags,
        videoUrl : file ? file.path : videoUrl 
    })

    return res.status(200).json(createVideo);
}