const { executeQuery } = require('../utils/queryGenerator.js');

class AdvisorsAdminsModel {
  getAdminsAdvisors = async userId => {
    try {
      const query = `select users_get_admin_advisors($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.users_get_admin_advisors;
    } catch (error) {
      throw error;
    }
  };

  insertAdminAdvisor = async ({ roleId, email, password, name, lastName, cellphone, profilePhoto }, userId) => {
    try {
      const query = `select users_insert_admin_advisor($1, $2, $3, $4, $5, $6, $7, $8);`;
      const res = await executeQuery(query, [roleId, email, password, name, lastName, cellphone, profilePhoto, userId], true);
      return res.users_insert_admin_advisor;
    } catch (error) {
      throw error;
    }
  };

  updateAdminAdvisor = async (adminAdvisorId, { roleId, email, name, lastName, cellphone, profilePhoto }, userId) => {
    try {
      const query = `select users_update_admin_advisor($1, $2, $3, $4, $5, $6, $7, $8);`;
      const res = await executeQuery(query, [adminAdvisorId, roleId, email, name, lastName, cellphone, profilePhoto, userId], true);
      return res.users_update_admin_advisor;
    } catch (error) {
      throw error;
    }
  };

  deleteAdminAdvisor = async (adminAdvisorId, userId) => {
    try {
      const query = `select users_delete_admin_advisor($1, $2);`;
      const res = await executeQuery(query, [adminAdvisorId, userId], true);
      return res.users_delete_admin_advisor;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new AdvisorsAdminsModel();
