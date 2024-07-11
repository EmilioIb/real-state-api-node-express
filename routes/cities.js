const express = require('express');
const app = express();
const router = express.Router();

const { citiesController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get all cities
router.get('/', citiesController.getCities);

// * Get all cities based on stateId
router.get('/from-state', citiesController.getCitiesFromState);

// * Get cities based on name
router.get('/by-name', citiesController.getCitiesByName);

router.post('/', citiesController.insertCity);

router.put('/:cityId', citiesController.updateCity);

router.delete('/:cityId', citiesController.deleteCity);

app.use('/cities', router);

module.exports = app;
