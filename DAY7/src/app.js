import express from "express";
import applicationRoutes from "./routes/application.route.js"
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.get('/health',(req, res) => {
    res.status(200).json({
        message: "Working Fine"
    })
});

app.use('/api/application', applicationRoutes);

app.use(errorHandler);



export default app;