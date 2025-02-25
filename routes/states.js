const express = require('express');
const app = express();
const router = express.Router();

const { statesController } = require('../controllers/index.js');

// * Get all states
router.get('/', statesController.getStates);

app.use('/states', router);

module.exports = app;
