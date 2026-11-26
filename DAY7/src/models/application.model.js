import mongoose from "mongoose";

const userApplication = new  mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "This Field is must"],
        trim: true
    },
    jobRole: {
        type: String,
        required: [true, "Enter the role you have opted for"],
        trim: true
    },
    status: {
        type: String,
        default: "applied",
        enum: ["applied","interviewing", "offered", "rejected"]
    },
    salary: {
        type: Number,
        min: 0
    },
    notes: {
        type: String,
        trim: true
    }
}, {timestamps: true});

const Application = mongoose.model("Application", userApplication);

export default Application;

