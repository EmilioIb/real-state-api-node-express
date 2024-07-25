const express = require('express');
const app = express();
const router = express.Router();

const { rolesController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get admin and advisor roles
router.get('/admin-advisor', rolesController.getAdminAdvisorRoles);

app.use('/roles', router);

module.exports = app;
