const { executeQuery } = require('../utils/queryGenerator.js');

class ProfileModel {
  getAdminAdvisorProfile = async userId => {
    try {
      const query = `select profile_get_admin_advisor_profile($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.profile_get_admin_advisor_profile;
    } catch (error) {
      throw error;
    }
  };

  updateAdminAdvisorProfile = async (cityId, { name, lastName, cellphone }) => {
    try {
      const query = `select profile_update_admin_advisor($1, $2, $3, $4);`;
      const res = await executeQuery(query, [cityId, name, lastName, cellphone], true);
      return res.profile_update_admin_advisor;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new ProfileModel();
