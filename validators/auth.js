const { z } = require('zod');

const getUserLogin = z.object({
  email: z.string({ required_error: 'email is required.' }).trim().email('email must be a valid email address.'),
  password: z
    .string({ required_error: 'password is required.' })
    .trim()
    .min(12, 'password must have at least 12 characters.')
    .max(16, 'password can only have a maximum of 16 characters.'),
});

module.exports = { getUserLogin };
