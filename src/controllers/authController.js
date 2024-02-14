import Auth from "../models/Auth"

export const account = async (req, res) => {
    const {
        avatar,
        name,
        nickName,
        email,
        password
    } = req.body;
    const existsNickName = await Auth.exists({ nickName });
    const existsEmail = await Auth.exists({ email });

    if (existsNickName) {
        return res.status(400).json({
            msg: "중복된 닉네임이 있습니다."
        })
    };
    if (existsEmail) {
        return res.status(400).json({
            msg: "중복된 이메일이 있습니다.."
        })
    };
    const user = await Auth.create({
        avatar,
        name,
        nickName,
        email,
        password
    });
    console.log('user', user);
    return res.status(200).json(user);
}