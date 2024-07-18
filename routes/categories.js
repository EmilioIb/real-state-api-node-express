const express = require('express');
const app = express();
const router = express.Router();

const { categoriesController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get all categories
router.get('/', categoriesController.getCategories);

app.use('/categories', router);

module.exports = app;
