const { profileModel } = require('../models/index.js');

class ProfileController {
  getAdminAdvisorProfile = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { code, ...response } = await profileModel.getAdminAdvisorProfile(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  updateAdminAdvisorProfile = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userProfile = req.body;
      const { code, ...response } = await profileModel.updateAdminAdvisorProfile(userId, userProfile);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ProfileController();
