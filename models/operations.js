const { executeQuery } = require('../utils/queryGenerator.js');

class OperationsModel {
  getOperations = async () => {
    try {
      const query = `select operations_get_operations();`;
      const res = await executeQuery(query, [], true);
      return res.operations_get_operations;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new OperationsModel();
