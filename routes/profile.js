const express = require('express');
const app = express();
const router = express.Router();

const { profileController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get all advisors/admins
router.get('/admins-advisors/:userId', profileController.getAdminAdvisorProfile);

// * Update advisors/admins
router.put('/admins-advisors/:userId', profileController.updateAdminAdvisorProfile);

app.use('/profile', router);

module.exports = app;
