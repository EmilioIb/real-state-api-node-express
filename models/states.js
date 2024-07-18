const { executeQuery } = require('../utils/queryGenerator.js');

class StatesModel {
  getStates = async () => {
    try {
      const query = `select states_get_states();`;
      const res = await executeQuery(query, [], true);
      return res.states_get_states;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new StatesModel();
