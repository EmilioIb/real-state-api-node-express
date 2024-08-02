const { z } = require('zod');

const getUserId = z.object({
  userId: z.string({ required_error: 'userId is required.' }).uuid('userId must be a valid UUID.'),
});

module.exports = { getUserId };
