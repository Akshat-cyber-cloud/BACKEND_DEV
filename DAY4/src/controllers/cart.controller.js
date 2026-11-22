import { addToCart } from "../services/cart.service.js";

const handleAddToCart = (req,res) => {
    try{
        const {productId , qty} = req.body;

        if(!productId || !qty || Number(qty) <= 0){
            return res.status(400).json({
                success: false,
                "message": "Product ID is must OR Quantity must be greater than 0"
            });
        }

        const item = addToCart(productId , Number(qty));

        return res.status(201).json({
            success: true,
            data: item
        });
    } catch(error){
        return res.status(400).json({
            message: error.message
        });
    }
}

export {handleAddToCart};