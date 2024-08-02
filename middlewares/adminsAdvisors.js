const { adminsAdvisorsValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');
const passwordsUtils = require('../utils/passwords.js');

class AdminsAdvisorsMiddleware {
  getAdminAdvisorId = (req, res, next) => {
    try {
      const schema = adminsAdvisorsValidator.getAdminAdvisorId;
      const { adminAdvisorId } = schema.parse(req.params);
      req.adminAdvisorId = adminAdvisorId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  insertAdminAdvisor = async (req, res, next) => {
    try {
      const schema = adminsAdvisorsValidator.insertAdminAdvisor;
      const adminAdvisor = schema.parse(req.body);
      adminAdvisor.password = await passwordsUtils.hashPassword(adminAdvisor.password);
      req.adminAdvisor = adminAdvisor;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  updateAdminAdvisor = (req, res, next) => {
    try {
      const schema = adminsAdvisorsValidator.updateAdminAdvisor;
      req.adminAdvisor = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  updateProfile = (req, res, next) => {
    try {
      const schema = adminsAdvisorsValidator.updateProfile;
      req.adminAdvisorProfile = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };
}

module.exports = new AdminsAdvisorsMiddleware();
