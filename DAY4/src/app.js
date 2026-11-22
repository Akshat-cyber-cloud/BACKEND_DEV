import express from "express";
import cartRoutes from "../src/routes/cart.route.js"

const app = express();

app.use(express.json());

app.use('/api/cart', cartRoutes);

app.get('/health', (req,res) => {
    return res.status(200).json({
        message: "Connected Successfully"
    });
})

export default app;