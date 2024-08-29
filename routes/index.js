const express = require('express');
const app = express();

app.use(require('./cities.js'));
app.use(require('./states.js'));
app.use(require('./categories.js'));
app.use(require('./operations.js'));
app.use(require('./roles.js'));
app.use(require('./adminsAdvisors.js'));
app.use(require('./profile.js'));
app.use(require('./propertyTypes.js'));
app.use(require('./properties.js'));

module.exports = app;
