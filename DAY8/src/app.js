import express from "express";
import crudRoutes from "./routes/task.route.js";

const app = express();

app.use(express.json());

app.use('/api', crudRoutes);

app.get('/health', (req,res) => {
    res.status(200).json({
        message: "Working Fine"
    });
})

export default app;