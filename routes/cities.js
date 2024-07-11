const express = require('express');
const app = express();
const router = express.Router();

const { citiesController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

router.get('/', citiesController.getProjects);

router.post('/', citiesController.insertProject);

app.use('/cities', router);

module.exports = app;
