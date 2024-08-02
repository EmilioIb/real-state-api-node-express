const express = require('express');
const app = express();
const router = express.Router();

const { profileController } = require('../controllers/index.js');
const { adminsAdvisorsMiddleware } = require('../middlewares/index');

// * Get all advisors/admins
router.get('/admins-advisors/:adminAdvisorId', adminsAdvisorsMiddleware.getAdminAdvisorId, profileController.getAdminAdvisorProfile);

// * Update advisors/admins
router.put(
  '/admins-advisors/:adminAdvisorId',
  adminsAdvisorsMiddleware.getAdminAdvisorId,
  adminsAdvisorsMiddleware.updateProfile,
  profileController.updateAdminAdvisorProfile
);

app.use('/profile', router);

module.exports = app;
