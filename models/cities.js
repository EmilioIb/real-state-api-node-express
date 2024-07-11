const { executeQuery } = require('../utils/queryGenerator.js');

class CitiesModel {
  getProjects = async userId => {
    try {
      const query = `select cities_get_cities($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.cities_get_cities;
    } catch (error) {
      throw error;
    }
  };

  insertProject = async () => {
    try {
      const query = `select cities_ins_city_v2('Saltillo', '42dfa45a-d736-4e02-bd71-926ebdfe95b8', 'fcc50949-c47e-40de-b79e-17908c9360a2');`;
      const res = await executeQuery(query, [], false);
      return res[0].cities_ins_city;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new CitiesModel();
