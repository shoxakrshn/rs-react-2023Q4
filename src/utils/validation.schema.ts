import * as yup from 'yup';

const nameRegex = /^[A-Z][a-z]*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];
const FILE_SIZE = 2000000; // 2MB

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .required('This field must not be empty')
    .matches(nameRegex, 'Name must start with an uppercase letter'),

  age: yup
    .number()
    .typeError('This field must not be empty')
    .positive('It must be positive number')
    .required('This field must not be empty'),

  email: yup
    .string()
    .email('It must be valid email')
    .required('This field must not be empty'),

  password: yup
    .string()
    .required('This field must not be empty')
    .matches(passwordRegex, {
      message:
        'Password mustone uppercase, one lowercase, one number and one special character',
    })
    .min(8, 'Password must contain at least 8 characters'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('This field must not be empty'),

  gender: yup.string().required('Gender  must be selected'),

  country: yup.string().required('This field must not be empty'),

  agreement: yup
    .boolean()
    .required('You must accept the terms')
    .oneOf([true], 'You must accept to the terms and conditions'),

  picture: yup
    .mixed<FileList>()
    .test(
      'length',
      'You need to provide picture file',
      (files) => !files || files.length !== 0,
    )
    .test(
      'type',
      'Only pictures with extension .png .jpeg permitted.',
      (files) =>
        !files ||
        files.length === 0 ||
        SUPPORTED_FORMATS.includes(files[0].type),
    )
    .test(
      'fileSize',
      'Only pictures up to 2MB are permitted.',
      (files) => !files || files.length === 0 || files[0].size <= FILE_SIZE,
    ),
});

export type UserType = yup.InferType<typeof userSchema>;
