const express = require('express');
const crudController = require('../controllers/crud.controller');

const router = express.Router();

// POST /api/course -> Creating a new course
router.post('/',crudController.handleCourse);

// GET /api/orders -> Fetching all the courses
router.get('/', crudController.handleAllCourses);

// PATCH api/orders/:id -> Updating the fee 
router.patch('/:id', crudController.handleFeeUpdate);

// DELETE api/orders:id -> deleting the course
router.delete('/:id', crudController.handleDeletion);

module.exports = router;
