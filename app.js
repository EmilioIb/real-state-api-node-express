require('dotenv').config();
const express = require('express');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index.js'));
app.use(errorHandler);

module.exports = app;
