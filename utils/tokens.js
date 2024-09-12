class TokensUtils {
  hashPassword = async passwordToHash => {
    try {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(passwordToHash, salt);
    } catch (error) {
      throw new Error('Error while hashing password');
    }
  };

  validatePassword = async (passwordToValidate, passwordHashed) => {
    try {
      return await bcrypt.compare(passwordToValidate, passwordHashed);
    } catch (error) {
      throw new Error('Error while comparing passwords');
    }
  };
}

module.exports = new TokensUtils();
