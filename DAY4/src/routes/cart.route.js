import express from "express";
import { handleAddToCart , handleCartSummary, handleDecreasingQuantity , handleCoupon} from "../controllers/cart.controller.js";

const router = express.Router();

// POST /api/cart -> Add To Cart
router.post('/', handleAddToCart);

// GET /api/cart -> Get The Deatils of the items present in cart
router.get('/', handleCartSummary);

// DELETE /api/cart/:productId -> Reduce Item By 1
router.delete('/:productId', handleDecreasingQuantity);

// POST /api/cart/:coupon -> Applying Coupan 
router.post('/:coupan', handleCoupon);

export default router;