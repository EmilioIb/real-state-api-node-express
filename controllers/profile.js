const { profileModel } = require('../models/index.js');

class ProfileController {
  getAdminAdvisorProfile = async (req, res, next) => {
    try {
      const { adminAdvisorId } = req;
      const { code, ...response } = await profileModel.getAdminAdvisorProfile(adminAdvisorId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  updateAdminAdvisorProfile = async (req, res, next) => {
    try {
      const { adminAdvisorId, adminAdvisorProfile } = req;
      const { code, ...response } = await profileModel.updateAdminAdvisorProfile(adminAdvisorId, adminAdvisorProfile);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ProfileController();
