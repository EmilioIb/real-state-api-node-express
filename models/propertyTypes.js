const { executeQuery } = require('../utils/queryGenerator.js');

class PropertyTypesModel {
  getTypesFromCategory = async propetyCategoryId => {
    try {
      const query = `select types_get_types_from_category($1);`;
      const res = await executeQuery(query, [propetyCategoryId], true);
      return res.types_get_types_from_category;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new PropertyTypesModel();
