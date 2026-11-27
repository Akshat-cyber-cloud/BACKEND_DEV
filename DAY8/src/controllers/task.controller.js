import { createTask, getAllTasks, getTaskById, updateTask , deleteTask } from "../services/task.service.js";

const handleCreateTask = async (req, res) => {
    try {
        const { title, description, status, priority, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is must"
            });
        }

        const task = await createTask({ title, description, status, priority, dueDate });

        return res.status(201).json({
            success: true,
            message: "Successfully Created",
            data: task
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const handleGetTask = async (req, res) => {
    try {
        const filter = {};

        if (req.query.status) {
            filter.status = req.query.status;
        }

        if (req.query.priority) {
            filter.priority = req.query.priority;
        }

        const tasks = await getAllTasks(filter);

        return res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const handleGetTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                message: "ID is required"
            });
        }

        const task = await getTaskById(id);

        return res.status(200).json({
            success: "true",
            data: task
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!"
        });
    }
}

const handleUpdateTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: "false",
                message: "ID is must"
            });
        }

        const newData = await updateTask(id, req.body);

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: newData
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const handleDeleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        await deleteTask(id);

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
};


export { handleCreateTask, handleGetTask, handleGetTaskById , handleUpdateTask , handleDeleteTask};