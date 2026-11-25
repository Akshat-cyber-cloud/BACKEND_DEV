import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is must"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true , "Password should be there"],
        minlength: 8,
        select: false
    }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;