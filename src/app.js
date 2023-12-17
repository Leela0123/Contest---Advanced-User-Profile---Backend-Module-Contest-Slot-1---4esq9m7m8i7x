const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('../routes/userRoutes');
const userProfileRoutes = require('../routes/userProfileRoutes');

app.use('/api/v1', userRoutes);
app.use('/api/v1', userProfileRoutes);
module.exports = app;
