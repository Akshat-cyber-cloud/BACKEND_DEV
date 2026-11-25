import express from "express";
import authRoutes from "./routes/auth.route.js"
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/health', (req,res) => {
    return res.status(200).json({
        message: "Connected Successfully"
    });
})

app.use(errorHandler);

export default app;
