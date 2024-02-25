import Auth from "../models/Auth";
import Video from "../models/Video";

export const videoUpload = async (req, res) => {
    const {
        body: {
            title,
            description,
            hashtags,
            videoUrl
        },
        file
    } = req;
    const id = req.userId;
    const auth = await Auth.findById(id);
    if (!auth) {
        return res.status(401).json({
            msg: "등록된 회원만 이용 가능합니다."
        })
    };

    const createVideo = await Video.create({
        title,
        description,
        hashtags,
        videoUrl: file ? file.path : videoUrl,
        owner: id,
    });
    auth.videos.push(createVideo)
    await auth.save();
    console.log('createVideo', createVideo)
    return res.status(200).json(createVideo);
}

export const getVideos = async (req, res) => {
    const videos = await Video.find({}).populate('owner');
    console.log('videos', videos);
    return res.status(200).json(videos);
};

export const videoViews = async (req, res) => {
    const { id } = req.params;
    console.log('id', id)

    const video = await Video.findById(id);
    console.log('video', video)

    // if (!video) {
    //     return res.status(404);
    // }
    video.meta.views = video.meta.views + 1;
    await video.save();
    return res.sendStatus(200);
}

export const viewBestApi = async (req, res) => {
    try {
        const videos = await Video.find({}).populate('owner').sort({ 'meta.views': -1 });
        return res.status(200).json(videos);
    } catch (error) {
        console.error('Error fetching best videos:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}