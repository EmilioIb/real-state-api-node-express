const { z } = require('zod');

const getPropertyId = z.object({
  propertyId: z.string({ required_error: 'propertyId is required.' }).uuid({ message: 'propertyId must be a valid UUID.' }),
});

const insertUpdateProperty = z.object({
  userId: z.string({ required_error: 'userId is required.' }).uuid('userId must be a valid UUID.'),
  stateId: z.string({ required_error: 'stateId is required.' }).uuid('stateId must be a valid UUID.'),
  cityId: z.string({ required_error: 'cityId is required.' }).uuid('cityId must be a valid UUID.'),
  operationId: z.string({ required_error: 'operationId is required.' }).uuid('operationId must be a valid UUID.'),
  propertyCategoryId: z.string({ required_error: 'propertyCategoryId is required.' }).uuid('propertyCategoryId must be a valid UUID.'),
  propertyTypeId: z.string({ required_error: 'propertyTypeId is required.' }).uuid('propertyTypeId must be a valid UUID.'),
  price: z
    .number({ required_error: 'price is required', invalid_type_error: 'price must be a number' })
    .positive('price must be grater than 0')
    .lte(99999999.99, 'price must be less than 99999999.99'),
  address: z
    .string({ required_error: 'address is required.', invalid_type_error: 'address must be a string.' })
    .trim()
    .min(1, 'address must have at least 1 character.')
    .max(250, 'address can only have a maximum of 250 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s\d.,#]+$/, 'address must only contain letters.'),
  neighborhood: z
    .string({ required_error: 'neighborhood is required.', invalid_type_error: 'neighborhood must be a string.' })
    .trim()
    .min(1, 'neighborhood must have at least 1 character.')
    .max(100, 'neighborhood can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s\d.,]+$/, 'neighborhood must only contain letters.'),
  landMts: z
    .number({ required_error: 'landMts is required', invalid_type_error: 'landMts must be a number' })
    .positive('landMts must be grater than 0')
    .lte(999999.99, 'landMts must be less than 999999.99'),
  buildMts: z
    .number({ required_error: 'buildMts is required', invalid_type_error: 'buildMts must be a number' })
    .nonnegative('buildMts must be equal or grater than 0')
    .lte(999999.99, 'buildMts must be less than 999999.99')
    .nullable(),
  floors: z
    .number({ required_error: 'floors is required', invalid_type_error: 'floors must be a number' })
    .int('floors must be an integer')
    .positive('floors must be grater than 0')
    .safe('floors must have a safe value for a number')
    .nullable(),
  rooms: z
    .number({ required_error: 'rooms is required', invalid_type_error: 'rooms must be a number' })
    .int('rooms must be an integer')
    .nonnegative('rooms must be equal or grater than 0')
    .safe('rooms must have a safe value for a number')
    .nullable(),
  bathrooms: z
    .number({ required_error: 'bathrooms is required', invalid_type_error: 'bathrooms must be a number' })
    .nonnegative('bathrooms must be equal or grater than 0')
    .safe('bathrooms must have a safe value for a number')
    .multipleOf(0.5, 'bathrooms must be a multiple of 0.5')
    .nullable(),
  airConditioning: z.boolean({ required_error: 'airConditioning is required', invalid_type_error: 'airConditioning must be a boolean' }).nullable(),
  furnished: z.boolean({ required_error: 'furnished is required', invalid_type_error: 'furnished must be a boolean' }).nullable(),
  heating: z.boolean({ required_error: 'heating is required', invalid_type_error: 'heating must be a boolean' }).nullable(),
  image: z
    .string({ required_error: 'image is required.', invalid_type_error: 'image must be a string.' })
    .trim()
    .min(1, 'image must have at least 1 character.')
    .max(255, 'image can only have a maximum of 255 characters.'),
});

const filterProperties = z
  .object({
    stateId: z.string({ required_error: 'stateId is required.' }).uuid('stateId must be a valid UUID.').nullable(),
    cityId: z.string({ required_error: 'cityId is required.' }).uuid('cityId must be a valid UUID.').nullable(),
    operationId: z.string({ required_error: 'operationId is required.' }).uuid('operationId must be a valid UUID.').nullable(),
    propertyCategoryId: z.string({ required_error: 'propertyCategoryId is required.' }).uuid('propertyCategoryId must be a valid UUID.').nullable(),
    propertyTypeId: z.string({ required_error: 'propertyTypeId is required.' }).uuid('propertyTypeId must be a valid UUID.').nullable(),
    priceMin: z
      .number({ required_error: 'priceMin is required', invalid_type_error: 'priceMin must be a number' })
      .positive('priceMin must be grater than 0')
      .lte(99999999.99, 'priceMin must be less than 99999999.99')
      .nullable(),
    priceMax: z
      .number({ required_error: 'priceMax is required', invalid_type_error: 'priceMax must be a number' })
      .positive('priceMax must be grater than 0')
      .lte(99999999.99, 'priceMax must be less than 99999999.99')
      .nullable(),
    landMtsMin: z
      .number({ required_error: 'landMtsMin is required', invalid_type_error: 'landMtsMin must be a number' })
      .positive('landMtsMin must be grater than 0')
      .lte(999999.99, 'landMtsMin must be less than 999999.99')
      .nullable(),
    landMtsMax: z
      .number({ required_error: 'landMtsMax is required', invalid_type_error: 'landMtsMax must be a number' })
      .positive('landMtsMax must be grater than 0')
      .lte(999999.99, 'landMtsMax must be less than 999999.99')
      .nullable(),
    builMtsMin: z
      .number({ required_error: 'builMtsMin is required', invalid_type_error: 'builMtsMin must be a number' })
      .nonnegative('builMtsMin must be equal or grater than 0')
      .lte(999999.99, 'builMtsMin must be less than 999999.99')
      .nullable(),
    builMtsMax: z
      .number({ required_error: 'builMtsMax is required', invalid_type_error: 'builMtsMax must be a number' })
      .nonnegative('builMtsMax must be equal or grater than 0')
      .lte(999999.99, 'builMtsMax must be less than 999999.99')
      .nullable(),
    floorsMin: z
      .number({ required_error: 'floorsMin is required', invalid_type_error: 'floorsMin must be a number' })
      .int('floorsMin must be an integer')
      .positive('floorsMin must be grater than 0')
      .safe('floorsMin must have a safe value for a number')
      .nullable(),
    floorsMax: z
      .number({ required_error: 'floorsMax is required', invalid_type_error: 'floorsMax must be a number' })
      .int('floorsMax must be an integer')
      .positive('floorsMax must be grater than 0')
      .safe('floorsMax must have a safe value for a number')
      .nullable(),
    roomsMin: z
      .number({ required_error: 'roomsMin is required', invalid_type_error: 'roomsMin must be a number' })
      .int('roomsMin must be an integer')
      .nonnegative('roomsMin must be equal or grater than 0')
      .safe('roomsMin must have a safe value for a number')
      .nullable(),
    roomsMax: z
      .number({ required_error: 'roomsMax is required', invalid_type_error: 'roomsMax must be a number' })
      .int('roomsMax must be an integer')
      .nonnegative('roomsMax must be equal or grater than 0')
      .safe('roomsMax must have a safe value for a number')
      .nullable(),
    bathroomsMin: z
      .number({ required_error: 'bathroomsMin is required', invalid_type_error: 'bathroomsMin must be a number' })
      .nonnegative('bathroomsMin must be equal or grater than 0')
      .safe('bathroomsMin must have a safe value for a number')
      .multipleOf(0.5, 'bathroomsMin must be a multiple of 0.5')
      .nullable(),
    bathroomsMax: z
      .number({ required_error: 'bathroomsMax is required', invalid_type_error: 'bathroomsMax must be a number' })
      .nonnegative('bathroomsMax must be equal or grater than 0')
      .safe('bathroomsMax must have a safe value for a number')
      .multipleOf(0.5, 'bathroomsMax must be a multiple of 0.5')
      .nullable(),
    airConditioning: z.boolean({ required_error: 'airConditioning is required', invalid_type_error: 'airConditioning must be a boolean' }).nullable(),
    furnished: z.boolean({ required_error: 'furnished is required', invalid_type_error: 'furnished must be a boolean' }).nullable(),
    heating: z.boolean({ required_error: 'heating is required', invalid_type_error: 'heating must be a boolean' }).nullable(),
  })
  .superRefine(
    (
      { priceMin, priceMax, landMtsMin, landMtsMax, builMtsMin, builMtsMax, floorsMin, floorsMax, roomsMin, roomsMax, bathroomsMin, bathroomsMax },
      ctx
    ) => {
      if (priceMin > priceMax) {
        ctx.addIssue({
          path: ['priceMax'],
          message: 'priceMin can not be greater than priceMax',
        });
      }

      if (landMtsMin > landMtsMax) {
        ctx.addIssue({
          path: ['landMtsMax'],
          message: 'landMtsMin can not be greater than landMtsMax',
        });
      }

      if (builMtsMin > builMtsMax) {
        ctx.addIssue({
          path: ['builMtsMax'],
          message: 'builMtsMin can not be greater than builMtsMax',
        });
      }

      if (floorsMin > floorsMax) {
        ctx.addIssue({
          path: ['floorsMax'],
          message: 'floorsMin can not be greater than floorsMax',
        });
      }

      if (roomsMin > roomsMax) {
        ctx.addIssue({
          path: ['roomsMax'],
          message: 'roomsMin can not be greater than roomsMax',
        });
      }

      if (bathroomsMin > bathroomsMax) {
        ctx.addIssue({
          message: 'bathroomsMin can not be greater than bathroomsMax',
          path: ['bathroomsMax'],
        });
      }
    }
  );

module.exports = { getPropertyId, insertUpdateProperty, filterProperties };
