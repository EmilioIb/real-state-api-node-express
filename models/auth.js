const { executeQuery } = require('../utils/queryGenerator.js');

class AuthModel {
  login = async email => {
    try {
      const query = `select users_get_user_by_email($1);;`;
      const res = await executeQuery(query, [email], true);
      return res.users_get_user_by_email;
    } catch (error) {
      throw error;
    }
  };

  getUserByToken = async token => {
    try {
      const query = `select users_get_user_by_token($1);;`;
      const res = await executeQuery(query, [token], true);
      return res.users_get_user_by_token;
    } catch (error) {
      throw error;
    }
  };

  saveRefreshToken = async (userId, token) => {
    try {
      const query = `select users_insert_refresh_token($1, $2);`;
      const res = await executeQuery(query, [userId, token], true);
      return res.users_insert_refresh_token;
    } catch (error) {
      throw error;
    }
  };

  deleteRefreshToken = async token => {
    try {
      const query = `select users_delete_refresh_token($1);`;
      const res = await executeQuery(query, [token], true);
      return res.users_delete_refresh_token;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new AuthModel();
