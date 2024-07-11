const { citiesModel } = require('../models/index.js');

class CitiesController {
  getProjects = async (req, res, next) => {
    try {
      const { userId } = req.query;
      const { code, ...response } = await citiesModel.getProjects(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertProject = async (req, res, next) => {
    try {
      const { code, ...body } = await citiesModel.insertProject();
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  updateProject = async (req, res, next) => {
    try {
      const { code, ...body } = await citiesModel.insertProject();
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CitiesController();
