const { adminsAdvisorsModel } = require('../models/index.js');
const passwordsUtils = require('../utils/passwords.js');

class AdminsAdvisorsController {
  getAdminsAdvisors = async (req, res, next) => {
    try {
      const { userId } = req.query;
      const { code, ...response } = await adminsAdvisorsModel.getAdminsAdvisors(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertAdminAdvisor = async (req, res, next) => {
    try {
      const adminAdvisor = req.body;
      const { userId } = req.query;
      adminAdvisor.password = await passwordsUtils.hashPassword(adminAdvisor.password);
      const { code, ...response } = await adminsAdvisorsModel.insertAdminAdvisor(adminAdvisor, userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  updateAdminAdvisor = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const adminAdvisor = req.body;
      const { userId: userUpdate } = req.query;
      const { code, ...response } = await adminsAdvisorsModel.updateAdminAdvisor(userId, adminAdvisor, userUpdate);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  deleteAdminAdvisor = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { userId: userDelete } = req.query;
      const { code, ...response } = await adminsAdvisorsModel.deleteAdminAdvisor(userId, userDelete);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AdminsAdvisorsController();
