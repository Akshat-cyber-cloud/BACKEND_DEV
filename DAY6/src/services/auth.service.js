import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const registerUser = async (name, email, password) => {
    if (!email || !name || !password) {
        throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email is already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
};

const loginUser = async (email , password) => {
    if(!email || ! password){
        throw new Error("All Fields are must");
    }

    const findExistingUser = await User.findOne({ email }).select("+password");

    if(!findExistingUser){
        throw new Error("Invalid Credentials");
    }

    const checkPassword = await bcrypt.compare(password,findExistingUser.password);

    if(!checkPassword){
        throw new Error("Invalid Credentials");
    }

    const token = jwt.sign({id: findExistingUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    return {findExistingUser , token};
}

export { registerUser , loginUser };