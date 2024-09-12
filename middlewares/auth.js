const { authValidator } = require('../validators/index');
const errorsUtils = require('../utils/errors');
const jwtUtils = require('../utils/jwt');

class AuthMiddleware {
  getUserLogin = (req, res, next) => {
    try {
      const schema = authValidator.getUserLogin;
      req.user = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json(errorsUtils.printErrors(error.errors));
    }
  };

  validateAccessToken = (req, res, next) => {
    try {
      const { authorization: authHeader } = req.headers;
      if (!authHeader) return res.sendStatus(401);
      const token = authHeader.split(' ')[1];
      const { userId, roleId } = jwtUtils.validateToken(token, 'access');
      req.userId = userId;
      req.roleId = roleId;
      next();
    } catch (error) {
      return res.sendStatus(403);
    }
  };
}

module.exports = new AuthMiddleware();
