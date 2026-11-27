import Task from "../models/task.model.js";

const createTask = async (data) => {
    if(!data){
        throw new Error("Complete Data is must to create a task");
    }

    const task = await Task.create(data);

    return task;
}

const getAllTasks = async (filter = {}) => {
    const tasks = await Task.find(filter).sort({createdAt: -1});

    return tasks;
}

const getTaskById = async (id) => {
    if(!id){
        throw new Error("Without ID can't fetch the task");
    }

    const task = await Task.findById(id);

    return task;
}

const updateTask = async (id, updateData) => {
    if(!id){
        throw new Error("Task ID is required");
    }

    const newData = await Task.findByIdAndUpdate(
        id,
        updateData,
        {new: true , runValidators: true}
    );

    if(!newData){
        throw new Error("Task not found");
    }

    return newData;
}

const deleteTask = async (id) => {
    if(!id){
        throw new Error("ID is must to delete");
    }

    const deleteTask = await Task.findByIdAndDelete(id);

    return deleteTask;
}


export {createTask , getAllTasks , getTaskById , updateTask , deleteTask};