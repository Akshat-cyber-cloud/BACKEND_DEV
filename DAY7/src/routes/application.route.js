import express from "express";
import {
    handleCreatingApplication,
    handleGetAllApplications,
    handleGetApplicationById,
    handleUpdateStatus,
    handleDeleteApplication
} from "../controllers/application.controller.js";

const router = express.Router();

// 1. CREATE -> POST /api/application
router.post('/', handleCreatingApplication);

// 2. READ ALL (supports ?status=...) -> GET /api/application
router.get('/', handleGetAllApplications);

// 3. READ ONE BY ID -> GET /api/application/:id
router.get('/:id', handleGetApplicationById);

// 4. UPDATE STATUS -> PATCH /api/application/:id/status
router.patch('/:id/status', handleUpdateStatus);

// 5. DELETE -> DELETE /api/application/:id
router.delete('/:id', handleDeleteApplication);

export default router;
