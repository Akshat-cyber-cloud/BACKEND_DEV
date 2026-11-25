import express from "express";
import protect from "../middlewares/auth.middleware.js";
import { handleLogin, handleRegister, handleGetUser } from "../controllers/auth.controller.js";

const router = express.Router();

// POST api/auth/register
router.post('/register', handleRegister);

// POST api/auth/login
router.post('/login',handleLogin);

// Protected Route - api/auth/me

router.get('/me', protect , handleGetUser);

export default router;