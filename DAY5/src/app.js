import express from "express";
import errorHandler from "./middlewares/errorhandler.js";

const app = express();

app.use(express.json());

app.get('/health', (req,res) => {
    return res.status(200).json({
        message: "Connection Established"
    })
});

app.get('/test-error', (req,res) => {
    throw new Error("This is a delibrate crash test");
});

app.use(errorHandler);

export default app;