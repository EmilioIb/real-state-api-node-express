const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

class JwtUtils {
  createToken = (bodyJwt, typeToken) => {
    try {
      const secret = typeToken === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
      const expiration = typeToken === 'access' ? { expiresIn: '30s' } : { expiresIn: '1d' };
      return jwt.sign(bodyJwt, secret, expiration);
    } catch (error) {
      throw new Error('Error while creating token');
    }
  };

  validateToken = (token, typeToken) => {
    try {
      const secret = typeToken === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new JwtUtils();
