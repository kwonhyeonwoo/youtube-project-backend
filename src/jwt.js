import jwt from "jsonwebtoken";

const secreyKey = "slslslsl!@#2342";

// jwt 발급
export const generateToken = (userId)=>{
    return jwt.sign({id:userId},secreyKey,{expiresIn:'2h'});
};

// jwt 검증
export const verifyToken = (token)=>{
    return jwt.verify(token,secreyKey);
};

