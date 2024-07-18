const { citiesModel } = require('../models/index.js');

class CitiesController {
  getCities = async (req, res, next) => {
    try {
      const { userId } = req.query;
      const { code, ...response } = await citiesModel.getCities(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  getCitiesFromState = async (req, res, next) => {
    try {
      const { stateId } = req.query;
      const { code, ...response } = await citiesModel.getCitiesFromState(stateId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  getCitiesByName = async (req, res, next) => {
    try {
      const { name } = req.query;
      const { code, ...response } = await citiesModel.getCitiesByName(name);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertCity = async (req, res, next) => {
    try {
      const city = req.body;
      const { userId } = req.query;
      const { code, ...body } = await citiesModel.insertCity(city, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  updateCity = async (req, res, next) => {
    try {
      const { cityId } = req.params;
      const { userId } = req.query;
      const city = req.body;
      const { code, ...body } = await citiesModel.updateCity(cityId, city, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  deleteCity = async (req, res, next) => {
    try {
      const { cityId } = req.params;
      const { userId } = req.query;
      const { code, ...body } = await citiesModel.deleteCity(cityId, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CitiesController();
