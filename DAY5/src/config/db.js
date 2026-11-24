import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected");
    } catch (error) {
        console.error("MongoDB Connection Error");
        process.exit(1);
    }
};

export default connectDB;