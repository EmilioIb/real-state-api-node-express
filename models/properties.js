const { executeQuery } = require('../utils/queryGenerator.js');

class PropertiesModel {
  getProperties = async userId => {
    try {
      const query = `select properties_get_properties($1);`;
      const res = await executeQuery(query, [userId], true);
      return res.properties_get_properties;
    } catch (error) {
      throw error;
    }
  };

  filterProperties = async ({
    stateId,
    cityId,
    operationId,
    propertyCategoryId,
    propertyTypeId,
    priceMin,
    priceMax,
    landMtsMin,
    landMtsMax,
    builMtsMin,
    builMtsMax,
    floorsMin,
    floorsMax,
    roomsMin,
    roomsMax,
    bathroomsMin,
    bathroomsMax,
    airConditioning,
    furnished,
    heating,
  }) => {
    try {
      const query = `select properties_get_properties_filter($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);`;
      const res = await executeQuery(
        query,
        [
          stateId,
          cityId,
          operationId,
          propertyCategoryId,
          propertyTypeId,
          priceMin,
          priceMax,
          landMtsMin,
          landMtsMax,
          builMtsMin,
          builMtsMax,
          floorsMin,
          floorsMax,
          roomsMin,
          roomsMax,
          bathroomsMin,
          bathroomsMax,
          airConditioning,
          furnished,
          heating,
        ],
        true
      );
      return res.properties_get_properties_filter;
    } catch (error) {
      throw error;
    }
  };

  insertProperty = async (
    {
      userId,
      stateId,
      cityId,
      operationId,
      propertyCategoryId,
      propertyTypeId,
      price,
      address,
      neighborhood,
      landMts,
      buildMts,
      floors,
      rooms,
      bathrooms,
      airConditioning,
      furnished,
      heating,
      image,
    },
    userCreate
  ) => {
    try {
      const query = `select properties_insert_property($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);`;
      const res = await executeQuery(
        query,
        [
          userId,
          stateId,
          cityId,
          operationId,
          propertyCategoryId,
          propertyTypeId,
          price,
          address,
          neighborhood,
          landMts,
          buildMts,
          floors,
          rooms,
          bathrooms,
          airConditioning,
          furnished,
          heating,
          image,
          userCreate,
        ],
        true
      );
      return res.properties_insert_property;
    } catch (error) {
      throw error;
    }
  };

  updateProperty = async (
    propertyId,
    {
      userId,
      stateId,
      cityId,
      operationId,
      propertyCategoryId,
      propertyTypeId,
      price,
      address,
      neighborhood,
      landMts,
      buildMts,
      floors,
      rooms,
      bathrooms,
      airConditioning,
      furnished,
      heating,
      image,
    },
    userUpdate
  ) => {
    try {
      const query = `select properties_update_property($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);`;
      const res = await executeQuery(
        query,
        [
          propertyId,
          userId,
          stateId,
          cityId,
          operationId,
          propertyCategoryId,
          propertyTypeId,
          price,
          address,
          neighborhood,
          landMts,
          buildMts,
          floors,
          rooms,
          bathrooms,
          airConditioning,
          furnished,
          heating,
          image,
          userUpdate,
        ],
        true
      );
      return res.properties_update_property;
    } catch (error) {
      throw error;
    }
  };

  deleteProperty = async (propertyId, userId) => {
    try {
      const query = `select properties_delete_property($1, $2);`;
      const res = await executeQuery(query, [propertyId, userId], true);
      return res.properties_delete_property;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new PropertiesModel();
