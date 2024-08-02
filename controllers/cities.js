const { citiesModel } = require('../models/index.js');

class CitiesController {
  getCities = async (req, res, next) => {
    try {
      const { userId } = req;
      const { code, ...response } = await citiesModel.getCities(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  getCitiesFromState = async (req, res, next) => {
    try {
      const { stateId } = req;
      const { code, ...response } = await citiesModel.getCitiesFromState(stateId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  getCitiesByName = async (req, res, next) => {
    try {
      const { name } = req;
      const { code, ...response } = await citiesModel.getCitiesByName(name);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertCity = async (req, res, next) => {
    try {
      const { city, userId } = req;
      const { code, ...body } = await citiesModel.insertCity(city, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  updateCity = async (req, res, next) => {
    try {
      const { cityId, city, userId } = req;
      const { code, ...body } = await citiesModel.updateCity(cityId, city, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  deleteCity = async (req, res, next) => {
    try {
      const { cityId, userId } = req;
      const { code, ...body } = await citiesModel.deleteCity(cityId, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CitiesController();
