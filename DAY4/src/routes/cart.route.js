import express from "express";
import { handleAddToCart } from "../controllers/cart.controller.js";

const router = express.Router();

// POST /api/cart -> Add To Cart
router.post('/', handleAddToCart);

export default router;