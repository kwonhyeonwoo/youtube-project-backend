import multer from "multer";
import { verifyToken } from "./jwt";

// 파일업로드
export const avatarUpload = multer({ dest: "uploads/avatar" });

export const videoFileaUpload = multer({ dest: "uploads/videos" })

// jwt 검증 미들웨어
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(403).json({
            msg: "token is required"
        })
    }
    try {
        const decoded = verifyToken(token);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(400).json({
            message: "Invalid token"
        })
    }
}

