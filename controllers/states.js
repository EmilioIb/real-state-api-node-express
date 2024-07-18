const { stateModel } = require('../models/index.js');

class StatesController {
  getStates = async (req, res, next) => {
    try {
      const { code, ...response } = await stateModel.getStates();
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new StatesController();
