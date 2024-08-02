const express = require('express');
const app = express();
const router = express.Router();

const { citiesController } = require('../controllers/index.js');
const { permissionsMiddleware, citiesMiddleware } = require('../middlewares/index.js');

// * Get all cities
router.get('/', permissionsMiddleware.getUserId, citiesController.getCities);

// * Get all cities based on stateId
router.get('/from-state', citiesMiddleware.getCitiesFromState, citiesController.getCitiesFromState);

// * Get cities based on name
router.get('/by-name', citiesMiddleware.getCitiesByName, citiesController.getCitiesByName);

// * Create city
router.post('/', permissionsMiddleware.getUserId, citiesMiddleware.insertCity, citiesController.insertCity);

// * Update city
router.put('/:cityId', permissionsMiddleware.getUserId, citiesMiddleware.getCityId, citiesMiddleware.insertCity, citiesController.updateCity);

// * Delete city
router.delete('/:cityId', permissionsMiddleware.getUserId, citiesMiddleware.getCityId, citiesController.deleteCity);

app.use('/cities', router);

module.exports = app;
