const { propertyTypesValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');

class PropetyTypesMiddleware {
  getTypesFromCategory = (req, res, next) => {
    try {
      const schema = propertyTypesValidator.getTypesFromCategory;
      const { propetyCategoryId } = schema.parse(req.query);
      req.propetyCategoryId = propetyCategoryId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };
}

module.exports = new PropetyTypesMiddleware();
