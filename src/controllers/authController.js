import { Auth } from "../models/Auth";
import bcrype from "bcrypt";
export const authAccount = async (req, res) => {
    const {
        email,
        name,
        userId,
        password,
    } = req.body;
    const auth = await Auth.create({
        email, name, userId, password
    });
    console.log('auth', auth)
    return res.json(auth);
}

export const authLogin = async (req, res) => {
    const { userId, password } = req.body;
    const user = await Auth.findOne({ userId });
    if (!user) {
        return res.status(404).json({
            errorMsg: '아이디가 존재하지 않습니다.'
        });
    };
    const passwordCheck = await bcrype.compare(password, user.password);
    if (!passwordCheck) {
        return res.status(404).json({
            errorMsg: "비밀번호가 일치하지 않습니다."
        });
    };
    console.log('user', user);
    console.log('`passwordCheck', passwordCheck)
    return res.status(200).json();
}