const express = require('express');
const app = express();
const router = express.Router();

const { rolesController } = require('../controllers/index.js');
const { permissionsMiddleware } = require('../middlewares/index.js');

// * Get admin and advisor roles
router.get('/admin-advisor', permissionsMiddleware.getUserId, rolesController.getAdminAdvisorRoles);

app.use('/roles', router);

module.exports = app;
