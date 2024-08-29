const { propertiesValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');

class PropertiesMiddleware {
  getPropertyId = (req, res, next) => {
    try {
      const schema = propertiesValidator.getPropertyId;
      const { propertyId } = schema.parse(req.params);
      req.propertyId = propertyId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  insertUpdateProperty = (req, res, next) => {
    try {
      const schema = propertiesValidator.insertUpdateProperty;
      req.property = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  filterProperties = (req, res, next) => {
    try {
      const schema = propertiesValidator.filterProperties;
      req.filters = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };
}

module.exports = new PropertiesMiddleware();
