const { executeQuery } = require('../utils/queryGenerator.js');

class RolesModel {
  getAdminAdvisorRoles = async userId => {
    try {
      const query = `select roles_get_roles_admin_advisor($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.roles_get_roles_admin_advisor;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new RolesModel();
