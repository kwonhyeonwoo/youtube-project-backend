import mongoose from "mongoose";
import bcrypt from "bcrypt";
const authSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// 패스워드 암호화
authSchema.pre('save', async function () {
    // 2번째 인자는 해쉬 해주는 횟수
    this.password = await bcrypt.hash(this.password, 5)
})
export const Auth = mongoose.model('Auth', authSchema);