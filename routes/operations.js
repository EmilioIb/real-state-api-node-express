const express = require('express');
const app = express();
const router = express.Router();

const { operationsController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get all states
router.get('/', operationsController.getOperations);

app.use('/operations', router);

module.exports = app;
