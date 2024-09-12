const { authModel } = require('../models/index.js');
const passwordsUtils = require('../utils/passwords.js');
const JwtUtils = require('../utils/jwt.js');

class AuthController {
  login = async (req, res, next) => {
    try {
      const { user } = req;
      const { data } = await authModel.login(user.email);
      if (!data.length) throw 'User not found';

      const { password, ...userDB } = data[0];
      const resHash = await passwordsUtils.validatePassword(user.password, password);
      if (!resHash) throw 'Incorrect password';

      const accessToken = JwtUtils.createToken(userDB, 'access');
      const refreshToken = JwtUtils.createToken(userDB, 'refresh');

      const { code, message, status } = await authModel.saveRefreshToken(userDB.userId, refreshToken);

      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
      return res.status(code).json({ status, message, accessToken });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req, res, next) => {
    try {
      const { jwt } = req.cookies;
      if (!jwt) return res.sendStatus(204);

      const { data: foundUser } = await authModel.getUserByToken(jwt);

      if (!foundUser.length) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
      }

      await authModel.deleteRefreshToken(jwt);
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

  refreshToken = async (req, res, next) => {
    try {
      const { jwt } = req.cookies;
      if (!jwt) return res.sendStatus(401);

      const { data, message, status, code } = await authModel.getUserByToken(jwt);

      if (!data.length) return res.sendStatus(403);

      const userDb = data[0];

      const { roleId, userId } = JwtUtils.validateToken(jwt, 'refresh');

      if (userId != userDb.userId) throw new Error('Incorrect token for user');

      const accessToken = JwtUtils.createToken({ roleId, userId }, 'access');

      return res.status(code).json({ status, message, accessToken });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AuthController();
