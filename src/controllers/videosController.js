import Video from "../models/Video";
export const video = async (req, res) => {
    const video = await Video.find({});
    console.log('video', video)
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

export const postEdit = async (req, res) => {
    const { title, description, hashtags, id } = req.body;

    const videos = await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags
    })
    return res.status(200).json(videos);
}

export const deleteVideo = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findByIdAndDelete(id);
    console.log('params id', id);
    console.log('video', video)
    return video;
}

export const videoSearch = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) {
        videos = await Video.find({
            title: keyword
        })
        console.log('videos', videos)
        return res.json(videos);

    };
    console.log('keyword', keyword)
}