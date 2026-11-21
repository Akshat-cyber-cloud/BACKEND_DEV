const express = require('express');
const orderRoutes = require('./routes/order.route')
const app = express();

app.use(express.json());

app.use('/api/orders', orderRoutes)

app.get('/health', (req,res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime()
    });
});

module.exports = app;