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

export const postUpload = (req,res)=>{
    const { title } = req.body
    const newVideo = [
        {
            title,
            rating: 5,
            comments: 2,
            createdAt: "just not",
            views: 1,
            id: 1,
        }
    ]
    console.log('reqbody', req.body)
    videos.push(newVideo);
    return res.json(newVideo)
};

export const getUpload = (req,res)=>{
    return res.json(videos);
};