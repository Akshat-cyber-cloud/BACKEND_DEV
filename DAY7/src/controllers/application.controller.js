import { createApplication, getAllApplications, getApplicationById, updateApplicationStatus, deleteApplication } from "../services/application.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const handleCreatingApplication = asyncHandler(async (req,res) => {
    const {companyName , jobRole} = req.body;

    if(!companyName || !jobRole){
        return res.status(400).json({
            message: "Company name and job role are required"
        })
    }

    const application = await createApplication(req.body);

    res.status(201).json({
        success: true,
        message: "Application created successfully",
        data: application
    });
})

const handleGetAllApplications = asyncHandler(async (req, res) => {
    const filter = {};
    if (req.query.status) {
        filter.status = req.query.status;
    }
    const applications = await getAllApplications(filter);
    res.status(200).json({
        success: true,
        count: applications.length,
        data: applications
    });
});

const handleGetApplicationById = asyncHandler(async (req, res) => {
    const application = await getApplicationById(req.params.id);
    res.status(200).json({
        success: true,
        data: application
    });
});

const handleUpdateStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    if (!status) {
        res.status(400);
        throw new Error("Please provide a new status");
    }
    const updated = await updateApplicationStatus(req.params.id, status);
    res.status(200).json({
        success: true,
        message: "Status updated successfully",
        data: updated
    });
});

const handleDeleteApplication = asyncHandler(async (req, res) => {
    await deleteApplication(req.params.id);
    res.status(200).json({
        success: true,
        message: "Application deleted successfully"
    });
});




export {handleCreatingApplication , handleGetAllApplications, handleGetApplicationById, handleUpdateStatus, handleDeleteApplication};