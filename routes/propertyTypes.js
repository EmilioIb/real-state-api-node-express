const express = require('express');
const app = express();
const router = express.Router();

const { propertyTypesController } = require('../controllers/index.js');
const { propertyTypesMiddleware } = require('../middlewares/index.js');

// * Get all categories
router.get('/from-category', propertyTypesMiddleware.getTypesFromCategory, propertyTypesController.getTypesFromCategory);

app.use('/property-types', router);

module.exports = app;
