const express = require('express');
const app = express();

app.use(require('./cities.js'));

module.exports = app;
