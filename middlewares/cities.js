const { citiesValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');

class CitiesMiddleware {
  getCitiesFromState = (req, res, next) => {
    try {
      const schema = citiesValidator.getCitiesFromState;
      const { stateId } = schema.parse(req.query);
      req.stateId = stateId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  getCitiesByName = (req, res, next) => {
    try {
      const schema = citiesValidator.getCitiesByName;
      const { name } = schema.parse(req.query);
      req.name = name;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  insertCity = (req, res, next) => {
    try {
      const schema = citiesValidator.insertCity;
      req.city = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  getCityId = (req, res, next) => {
    try {
      const schema = citiesValidator.getCityId;
      const { cityId } = schema.parse(req.params);
      req.cityId = cityId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };
}

module.exports = new CitiesMiddleware();
