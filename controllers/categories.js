const { categoriesModel } = require('../models/index.js');

class CategoriesController {
  getCategories = async (req, res, next) => {
    try {
      const { code, ...response } = await categoriesModel.getCategories();
      return res.status(code).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CategoriesController();
