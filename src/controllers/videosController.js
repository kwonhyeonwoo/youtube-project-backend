import Video from "../models/Video";



export const video = async(req,res)=>{
    const video = await Video.find({});
    console.log('video',video)
    return res.status(200).json(video);
}

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    const videos = await Video.create({
        title,
        description,
        hashtags,
    })
    console.log('videos', videos)
    return res.status(200).json(videos);
};

export const getUpload = async (req, res) => {
    const videos = await Video.find({});
    console.log('videos', videos);
    return res.status(200).json(videos);
};

export const postEdit = async (req,res)=>{
    const {title,description,hashtags,id} = req.body;
    const video = await Video.findById(id);

    video.title = title;
    video.description = description;
    console.log('vide1o', id)

    await video.save();
    return res.status(200).json(video);
}