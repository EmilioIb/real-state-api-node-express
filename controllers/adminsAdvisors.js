const { adminsAdvisorsModel } = require('../models/index.js');

class AdminsAdvisorsController {
  getAdminsAdvisors = async (req, res, next) => {
    try {
      const { userId } = req;
      const { code, ...response } = await adminsAdvisorsModel.getAdminsAdvisors(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertAdminAdvisor = async (req, res, next) => {
    try {
      const { adminAdvisor, userId } = req;
      const { code, ...response } = await adminsAdvisorsModel.insertAdminAdvisor(adminAdvisor, userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  updateAdminAdvisor = async (req, res, next) => {
    try {
      const { adminAdvisorId, adminAdvisor, userId } = req;
      const { code, ...response } = await adminsAdvisorsModel.updateAdminAdvisor(adminAdvisorId, adminAdvisor, userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  deleteAdminAdvisor = async (req, res, next) => {
    try {
      const { adminAdvisorId, userId } = req;
      const { code, ...response } = await adminsAdvisorsModel.deleteAdminAdvisor(adminAdvisorId, userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AdminsAdvisorsController();
