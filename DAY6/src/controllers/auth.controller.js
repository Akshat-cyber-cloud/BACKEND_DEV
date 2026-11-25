import { registerUser, loginUser } from "../services/auth.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";


const handleRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await registerUser(name, email, password);

    return res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
});

const handleLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All Fields are must"
        });
    }

    const { findExistingUser, token } = await loginUser(email, password);

    return res.status(200).json({
        success: true,
        message: "Login Successful",
        data: {
            id: findExistingUser._id,
            email: findExistingUser.email,
            token
        }
    });
});

const handleGetUser = asyncHandler(async (req,res) => {
    res.status(200).json({
        success: true,
        data: req.user
    })
})


export { handleRegister, handleLogin, handleGetUser };
