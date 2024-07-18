const { rolesModel } = require('../models/index.js');

class RolesController {
  getAdminAdvisorRoles = async (req, res, next) => {
    try {
      const { userId } = req.query;
      const { code, ...response } = await rolesModel.getAdminAdvisorRoles(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new RolesController();
