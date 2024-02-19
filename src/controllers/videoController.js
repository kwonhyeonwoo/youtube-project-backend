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
    auth.videos = createVideo;
    auth.save();
    return res.status(200).json(createVideo);
}

export const getVideos = async (req, res) => {
    const videos = await Video.find({}).populate('owner');
    console.log('videos', videos);
    return res.status(200).json(videos);
};