const permissionsMiddleware = require('./permissions');
const adminsAdvisorsMiddleware = require('./adminsAdvisors');
const citiesMiddleware = require('./cities');
const propertyTypesMiddleware = require('./propertyTypes');
const propertiesMiddleware = require('./properties');

module.exports = {
  permissionsMiddleware,
  adminsAdvisorsMiddleware,
  citiesMiddleware,
  propertyTypesMiddleware,
  propertiesMiddleware,
};
