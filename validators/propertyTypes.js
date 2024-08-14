const { z } = require('zod');

const getTypesFromCategory = z.object({
  propetyCategoryId: z.string({ required_error: 'propetyCategoryId is required' }).uuid('propetyCategoryId must be a valid UUID.'),
});

module.exports = { getTypesFromCategory };
