import express from "express";
import { handleCreateTask, handleGetTask , handleGetTaskById , handleUpdateTask , handleDeleteTask} from "../controllers/task.controller.js";

const router = express.Router();

router.post('/createTask', handleCreateTask);

router.get('/tasks', handleGetTask);

router.get('/task/:id', handleGetTaskById);

router.patch('/task/:id', handleUpdateTask);

router.delete('/task/:id', handleDeleteTask);

export default router;