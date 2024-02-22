import { generateToken } from "../jwt";
import Auth from "../models/Auth"
import bcrypt from 'bcrypt';
export const account = async (req, res) => {
    const {
        body: {
            avatar,
            name,
            nickName,
            email,
            password
        },
        file
    } = req;
    const existsNickName = await Auth.exists({ nickName });
    const existsEmail = await Auth.exists({ email });

    if (existsNickName) {
        return res.status(400).json({
            msg: "중복된 닉네임이 있습니다"
        })
    };
    if (existsEmail) {
        return res.status(401).json({
            msg: "중복된 이메일이 있습니다"
        })
    };

    const user = await Auth.create({
        avatar: file ? file.path : avatar,
        name,
        nickName,
        email,
        password: await bcrypt.hash(password, 5)
    });
    return res.status(200).json(user);
}
export const login = async (req, res) => {
    const { nickName, password } = req.body;
    const user = await Auth.findOne({ nickName });
    if (!user) {
        return res.status(400).json({
            msg: "존재하지 않는 닉네임 입니다."
        })
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return res.status(401).json({
            msg: "비밀번호가 올바르지 않습니다."
        })
    }
    const token = generateToken(user._id);
    return res.status(200).json({ token })
};

export const userProfile = async (req, res) => {
    const id = req.userId;
    const profile = await Auth.findById(id).populate('videos');
    return res.status(200).json(profile);
}



export const authEdit = async (req, res) => {
    const {
        body: {
            avatar, nickName, email, name
        },
        file
    } = req;
    const id = req.userId;
    let updateData = {
        avatar: file ? file.path : avatar,
        nickName,
        email,
        name
    }
    const existsNickname = await Auth.exists({ nickName });
    const existsEmail = await Auth.exists({ email });

    // 빈 문자열 필드 제거
    Object.keys(updateData).forEach(key => {
        if (updateData[key] === '') {
            delete updateData[key];
        }
    });

    // 닉네임과 이메일 중복 체크
    if (existsNickname && updateData.nickName) {
        return res.status(400).json({
            msg: "중복된 닉네임이 있습니다."
        });
    }
    if (existsEmail && updateData.email) {
        return res.status(401).json({
            msg: "중복된 이메일이 있습니다."
        });
    }

    try {
        const authUpdate = await Auth.findByIdAndUpdate(id, updateData, { new: true });
        console.log('update', authUpdate);
        return res.status(200).json(authUpdate);
    } catch (error) {
        // 에러 처리
        console.error(error);
        return res.status(500).json({ msg: "서버 오류가 발생했습니다." });
    }
};
