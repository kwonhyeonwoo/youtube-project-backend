import mongoose from "mongoose";
import bcrypt from "bcrypt";
const authSchema = new mongoose.Schema({
    avatar: { type: String, },
    name: { type: String, required: true, minlength: 2, maxlength: 6 },
    nickName: { type: String, required: true, unique: true, minlength: 3, maxlength: 9 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

authSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 5);
})
export const Auth = mongoose.model("Auth", authSchema);

export default Auth;