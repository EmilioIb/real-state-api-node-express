const { z } = require('zod');

const getCitiesFromState = z.object({
  stateId: z.string({ required_error: 'stateId is required' }).uuid('stateId must be a valid UUID.'),
});

const getCitiesByName = z.object({
  name: z
    .string({ required_error: 'name is required.', invalid_type_error: 'name must be a string.' })
    .trim()
    .min(1, 'name must have at least 1 character.')
    .max(100, 'name can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s0-9,\.]+$/, 'name must only contain letters, numbers, spaces, commas, and periods.'),
});

const insertCity = z.object({
  cityName: z
    .string({ required_error: 'cityName is required.', invalid_type_error: 'cityName must be a string.' })
    .trim()
    .min(1, 'cityName must have at least 1 character.')
    .max(100, 'cityName can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s0-9]+$/, 'cityName must only contain letters, numbers, spaces, commas, and periods.'),
  stateId: z.string({ required_error: 'stateId is required' }).uuid('stateId must be a valid UUID.'),
});

const getCityId = z.object({
  cityId: z.string({ required_error: 'cityId is required.' }).uuid({ message: 'cityId must be a valid UUID.' }),
});

module.exports = { getCitiesFromState, getCitiesByName, insertCity, getCityId };
