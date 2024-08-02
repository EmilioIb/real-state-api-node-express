const express = require('express');
const app = express();
const router = express.Router();

const { adminsAdvisorsController } = require('../controllers/index.js');
const { permissionsMiddleware, adminsAdvisorsMiddleware } = require('../middlewares/index.js');

// * Get all advisors/admins
router.get('/', permissionsMiddleware.getUserId, adminsAdvisorsController.getAdminsAdvisors);

// * Create advisors/admins
router.post('/', permissionsMiddleware.getUserId, adminsAdvisorsMiddleware.insertAdminAdvisor, adminsAdvisorsController.insertAdminAdvisor);

// * Update advisors/admins
router.put(
  '/:adminAdvisorId',
  permissionsMiddleware.getUserId,
  adminsAdvisorsMiddleware.getAdminAdvisorId,
  adminsAdvisorsMiddleware.updateAdminAdvisor,
  adminsAdvisorsController.updateAdminAdvisor
);

// * Delete advisors/admins
router.delete(
  '/:adminAdvisorId',
  permissionsMiddleware.getUserId,
  adminsAdvisorsMiddleware.getAdminAdvisorId,
  adminsAdvisorsController.deleteAdminAdvisor
);

app.use('/admins-advisors', router);

module.exports = app;
