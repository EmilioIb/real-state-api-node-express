const express = require('express');
const app = express();

app.use(require('./cities.js'));
app.use(require('./states.js'));
app.use(require('./categories.js'));
app.use(require('./operations.js'));

module.exports = app;
