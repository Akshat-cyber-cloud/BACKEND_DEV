import Application from "../models/application.model.js";


const createApplication = async (data) => {
    if(!data){
        throw new Error("Data is must to create a Application");
    }

    return await Application.create(data);
}

const getAllApplications = async (filter = {}) => {
    return await Application.find(filter);
}

const getApplicationById = async (id) => {
    const application = await Application.findById(id);

    if(!application){
        throw new Error("Application not found");
    }

    return application;
}

const updateApplicationStatus = async (id, status) => {
    if (!status) {
        throw new Error("Status is required");
    }
    const updated = await Application.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true } // new: true returns updated doc, runValidators enforces enum
    );
    if (!updated) {
        throw new Error("Application not found");
    }
    return updated;
};

const deleteApplication = async (id) => {
    const deleted = await Application.findByIdAndDelete(id);
    if (!deleted) {
        throw new Error("Application not found");
    }
    return deleted;
};

export {
    createApplication,
    getAllApplications,
    getApplicationById,
    updateApplicationStatus,
    deleteApplication
};