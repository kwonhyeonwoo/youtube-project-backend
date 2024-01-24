import Video from "../models/Video";

let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];

export const postUpload =async (req,res)=>{
    const {title,description,hashtags} = req.body;
    const video = new Video({
        title,
        description,
        hashtags
    });
    console.log('video', video)
    return res.status(200).json(video);
};

export const getUpload = async(req,res)=>{
   
};