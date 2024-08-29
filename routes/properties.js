const express = require('express');
const app = express();
const router = express.Router();

const { propertiesController } = require('../controllers/index.js');
const { propertiesMiddleware, permissionsMiddleware } = require('../middlewares/index.js');

// * Get all properties
router.get('/', permissionsMiddleware.getUserId, propertiesController.getProperties);

// * Get properties with filters
router.post('/filter', propertiesMiddleware.filterProperties, propertiesController.filterProperties);

// * Create property
router.post('/', permissionsMiddleware.getUserId, propertiesMiddleware.insertUpdateProperty, propertiesController.insertProperty);

// * Update property
router.put(
  '/:propertyId',
  permissionsMiddleware.getUserId,
  propertiesMiddleware.getPropertyId,
  propertiesMiddleware.insertUpdateProperty,
  propertiesController.updateProperty
);

// * Delete property
router.delete('/:propertyId', permissionsMiddleware.getUserId, propertiesMiddleware.getPropertyId, propertiesController.deleteProperty);

app.use('/properties', router);

module.exports = app;
