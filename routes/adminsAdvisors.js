const express = require('express');
const app = express();
const router = express.Router();

const { adminsAdvisorsController } = require('../controllers/index.js');
// const { projectsMiddleware } = require('../middlewares//index.middleware');

// * Get all advisors/admins
router.get('/', adminsAdvisorsController.getAdminsAdvisors);

// * Create advisors/admins
router.post('/', adminsAdvisorsController.insertAdminAdvisor);

// * Update advisors/admins
router.put('/:userId', adminsAdvisorsController.updateAdminAdvisor);

// * Delete advisors/admins
router.delete('/:userId', adminsAdvisorsController.deleteAdminAdvisor);

app.use('/admins-advisors', router);

module.exports = app;
