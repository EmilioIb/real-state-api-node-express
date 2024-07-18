const { executeQuery } = require('../utils/queryGenerator.js');

class CategoriesModel {
  getCategories = async () => {
    try {
      const query = `select categories_get_categories();`;
      const res = await executeQuery(query, [], true);
      return res.categories_get_categories;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new CategoriesModel();
