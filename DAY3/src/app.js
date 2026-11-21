const express = require('express');
const crudRoutes = require('./routes/crud.route');

const app = express();

app.use(express.json());

app.use('/api/course', crudRoutes);

app.get('/health', (req,res) => {
    return res.status(200).json({
        message: "Connected Successfully"
    });
})

module.exports = app;