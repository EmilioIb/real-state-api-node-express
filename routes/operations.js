const express = require('express');
const app = express();
const router = express.Router();

const { operationsController } = require('../controllers/index.js');

// * Get all operations
router.get('/', operationsController.getOperations);

app.use('/operations', router);

module.exports = app;
