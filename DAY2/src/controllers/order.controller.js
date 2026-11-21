const orderService = require('../services/order.service');

const handleCreateOrder = (req, res) => {
    try {
        const { customerName, items } = req.body;

        if (!customerName || typeof customerName !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Customer Name is required and must be a string"
            });
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Items must be selected"
            });
        }

        const order = orderService.createOrder(customerName, items);

        return res.status(201).json({
            success: true,
            data: order,
            error: null
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            error: error.message
        });
    }
}

module.exports = {
    handleCreateOrder
};