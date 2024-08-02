const { z } = require('zod');

const getAdminAdvisorId = z.object({
  adminAdvisorId: z.string({ required_error: 'adminValidatorId is required.' }).uuid({ message: 'adminValidatorId must be a valid UUID.' }),
});

const insertAdminAdvisor = z.object({
  roleId: z.string({ required_error: 'roleId is required.' }).uuid('roleId must be a valid UUID.'),
  email: z.string({ required_error: 'email is required.' }).trim().email('email must be a valid email address.'),
  password: z
    .string({ required_error: 'password is required.' })
    .trim()
    .min(12, 'password must have at least 12 characters.')
    .max(16, 'password can only have a maximum of 16 characters.')
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'password must include at least one uppercase letter, one lowercase letter, one number and one special character (@,$,!,%,*,?,&).'
    ),
  name: z
    .string({ required_error: 'name is required.', invalid_type_error: 'name must be a string.' })
    .trim()
    .min(1, 'name must have at least 1 character.')
    .max(100, 'name can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'name must only contain letters.'),
  lastName: z
    .string({ required_error: 'lastName is required.', invalid_type_error: 'lastName must be a string.' })
    .trim()
    .min(1, 'lastName must have at least 1 character.')
    .max(100, 'lastName can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'lastname must only contain letters.'),
  cellphone: z
    .string({ required_error: 'cellphone is required.' })
    .trim()
    .length(10, 'cellphone must have only 10 characteres.')
    .regex(/^\d+$/, 'cellphone must only include numbers.'),
  profilePhoto: z
    .string({ required_error: 'profilePhoto is required.', invalid_type_error: 'profilePhoto must be a string.' })
    .trim()
    .min(1, 'profilePhoto must have at least 1 character.')
    .max(255, 'profilePhoto can only have a maximum of 255 characters.'),
});

const updateAdminAdvisor = z.object({
  roleId: z.string({ required_error: 'roleId is required.' }).uuid('roleId must be a valid UUID.'),
  email: z.string({ required_error: 'email is required.' }).trim().email('email must be a valid email address.'),
  name: z
    .string({ required_error: 'name is required.', invalid_type_error: 'name must be a string.' })
    .trim()
    .min(1, 'name must have at least 1 character.')
    .max(100, 'name can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'name must only contain letters.'),
  lastName: z
    .string({ required_error: 'lastName is required.', invalid_type_error: 'lastName must be a string.' })
    .trim()
    .min(1, 'lastName must have at least 1 character.')
    .max(100, 'lastName can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'lastname must only contain letters.'),
  cellphone: z
    .string({ required_error: 'cellphone is required.' })
    .trim()
    .length(10, 'cellphone must have only 10 characteres.')
    .regex(/^\d+$/, 'cellphone must only include numbers.'),
  profilePhoto: z
    .string({ required_error: 'profilePhoto is required.', invalid_type_error: 'profilePhoto must be a string.' })
    .trim()
    .min(1, 'profilePhoto must have at least 1 character.')
    .max(255, 'profilePhoto can only have a maximum of 255 characters.'),
});

const updateProfile = z.object({
  name: z
    .string({ required_error: 'name is required.', invalid_type_error: 'name must be a string.' })
    .trim()
    .min(1, 'name must have at least 1 character.')
    .max(100, 'name can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'name must only contain letters.'),
  lastName: z
    .string({ required_error: 'lastName is required.', invalid_type_error: 'lastName must be a string.' })
    .trim()
    .min(1, 'lastName must have at least 1 character.')
    .max(100, 'lastName can only have a maximum of 100 characters.')
    .regex(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/, 'lastname must only contain letters.'),
  cellphone: z
    .string({ required_error: 'cellphone is required.' })
    .trim()
    .length(10, 'cellphone must have only 10 characteres.')
    .regex(/^\d+$/, 'cellphone must only include numbers.'),
});

module.exports = { getAdminAdvisorId, insertAdminAdvisor, updateAdminAdvisor, updateProfile };
