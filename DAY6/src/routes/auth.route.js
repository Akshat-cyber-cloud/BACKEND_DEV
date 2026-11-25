import express from "express";
import { handleLogin, handleRegister } from "../controllers/auth.controller.js";

const router = express.Router();

// POST api/auth/register
router.post('/register', handleRegister);

// POST api/auth/login
router.post('/login',handleLogin);

export default router;