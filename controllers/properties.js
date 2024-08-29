const { propertiesModel } = require('../models/index.js');

class PropertiesController {
  getProperties = async (req, res, next) => {
    try {
      const { userId } = req;
      const { code, ...response } = await propertiesModel.getProperties(userId);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  filterProperties = async (req, res, next) => {
    try {
      const { filters } = req;
      const { code, ...response } = await propertiesModel.filterProperties(filters);
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };

  insertProperty = async (req, res, next) => {
    try {
      const { property, userId: userCreate } = req;
      const { code, ...body } = await propertiesModel.insertProperty(property, userCreate);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  updateProperty = async (req, res, next) => {
    try {
      const { propertyId, property, userId: userUpdate } = req;
      const { code, ...body } = await propertiesModel.updateProperty(propertyId, property, userUpdate);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };

  deleteProperty = async (req, res, next) => {
    try {
      const { propertyId, userId } = req;
      const { code, ...body } = await propertiesModel.deleteProperty(propertyId, userId);
      return res.status(code).json(body);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new PropertiesController();
