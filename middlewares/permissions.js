const { permissionsValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');

class PermissionsMiddleware {
  getUserId = (req, res, next) => {
    try {
      const schema = permissionsValidator.getUserId;
      const { userId } = schema.parse(req.query);
      req.userId = userId;
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };
}

module.exports = new PermissionsMiddleware();
