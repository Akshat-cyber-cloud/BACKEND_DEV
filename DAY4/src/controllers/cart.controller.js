import { addToCart, cartSummary, decreaseQuantity, applyCoupon } from "../services/cart.service.js";

const handleAddToCart = (req, res) => {
    try {
        const { productId, qty } = req.body;

        if (!productId || !qty || Number(qty) <= 0) {
            return res.status(400).json({
                success: false,
                "message": "Product ID is must OR Quantity must be greater than 0"
            });
        }

        const item = addToCart(productId, Number(qty));

        return res.status(201).json({
            success: true,
            data: item
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

const handleCartSummary = (req, res) => {
    const cartData = cartSummary();

    return res.status(200).json({
        success: true,
        data: cartData
    });
}

const handleDecreasingQuantity = (req, res) => {
    try {
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({
                message: "ID is must"
            });
        }

        const decrease = decreaseQuantity(productId);

        return res.status(200).json({
            success: true,
            message: "Reduced by 1"
        });
    } catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const handleCoupon = (req,res) => {
    try{
        const {coupan} = req.params;

        if(!coupan){
            res.status(400).json({
                message: "Choose first coupon"
            });
        }

        const disCoupan = applyCoupon(coupan);

        return res.status(200).json({
            success: true,
            disCoupan
        });
    } catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


export { handleAddToCart, handleCartSummary, handleDecreasingQuantity , handleCoupon};