const { operationsModel } = require('../models/index.js');

class OperationsController {
  getOperations = async (req, res, next) => {
    try {
      const { code, ...response } = await operationsModel.getOperations();
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new OperationsController();
