const { executeQuery } = require('../utils/queryGenerator.js');

class CitiesModel {
  getCities = async userId => {
    try {
      const query = `select cities_get_cities($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.cities_get_cities;
    } catch (error) {
      throw error;
    }
  };

  getCitiesFromState = async stateId => {
    try {
      const query = `select cities_get_cities_from_state($1);`;
      const res = await executeQuery(query, [stateId], true);
      return res.cities_get_cities_from_state;
    } catch (error) {
      throw error;
    }
  };

  getCitiesByName = async name => {
    try {
      const query = `select cities_get_cities_by_name($1);`;
      const res = await executeQuery(query, [name], true);
      return res.cities_get_cities_by_name;
    } catch (error) {
      throw error;
    }
  };

  insertCity = async ({ cityName, stateId }, userId) => {
    try {
      const query = `select cities_insert_city($1, $2, $3);`;
      const res = await executeQuery(query, [cityName, stateId, userId], true);
      return res.cities_insert_city;
    } catch (error) {
      throw error;
    }
  };

  updateCity = async (cityId, { cityName, stateId }, userId) => {
    try {
      const query = `select cities_update_city($1, $2, $3, $4);`;
      const res = await executeQuery(query, [cityId, cityName, stateId, userId], true);
      return res.cities_update_city;
    } catch (error) {
      throw error;
    }
  };

  deleteCity = async (cityId, userId) => {
    try {
      const query = `select cities_delete_city($1, $2);`;
      const res = await executeQuery(query, [cityId, userId], true);
      return res.cities_delete_city;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new CitiesModel();
