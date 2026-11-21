const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

// POST /api/orders -> Creating a new Order
router.post('/', orderController.handleCreateOrder);

// GET /api/orders -> Fetch all the placed Orders
router.get('/', orderController.handleGetAllOrders);

// GET /api/orders/inventory -> View Live Inventory
router.get('/inventory',orderController.handleGetInventory);

// PATCH /api/orders/:orderId/cancel -> Cancel any order 
router.patch('/:orderId/cancel', orderController.handleCancelOrder);


module.exports = router;