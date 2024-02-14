import { generateToken } from "../jwt";
import Auth from "../models/Auth"
import bcrypt from 'bcrypt';
export const account = async (req, res) => {
    const {
        body:{
            avatar,
            name,
            nickName,
            email,
            password
        },
        file
    } = req;
    console.log('avatar',avatar)
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
        avatar: file ? file.path : avatar,
        name,
        nickName,
        email,
        password
    });
    console.log('user', user);
    return res.status(200).json(user);
}

export const login = async(req,res)=>{
    const {nickName, password} = req.body;
    const user = await Auth.findOne({nickName});
    if(!user){
        res.status(400).json({
            msg:"존재하지 않는 닉네임 입니다."
        })
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if(!passwordCheck){
        res.status(400).json({
            msg:"비밀번호가 올바르지 않습니다."
        })
    }
    const token = generateToken(user._id);
    console.log('token',token)
    return res.status(200).json({token})
};

export const userProfile = async(req,res)=>{
    const id = req.userId;
    const profile = await Auth.findById(id);
    console.log('profile',id);
    return res.status(200).json(profile);
}