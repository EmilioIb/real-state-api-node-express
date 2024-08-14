const { propertyTypesModel } = require('../models/index.js');

class PropertyTypesController {
  getTypesFromCategory = async (req, res, next) => {
    try {
      const { propetyCategoryId } = req;
      const { code, ...response } = await propertyTypesModel.getTypesFromCategory(propetyCategoryId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new PropertyTypesController();
