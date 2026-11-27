import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is must"],
        trim: true,
        minlength: [3,"Title must be atleast 3 characters"],
        maxlength: [100, "Title cannot exceed 100 chars"]
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ["Yet_to_be_started", "in_progress", "completed"],
        default: "Yet_to_be_started"
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high", "urgent"],
        default: "medium"
    },
    dueDate: {
        type: Date
    }
}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);

export default Task;