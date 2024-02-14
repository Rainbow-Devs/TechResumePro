import * as yup from 'yup';

export const RegistrationInputs = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'text',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    isPasswordShown: false, //used for tracking the password visibility
    isPasswordField: true, //used for showing the password toggle button
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    isPasswordShown: false, //used for tracking the password visibility
    isPasswordField: true, //used for showing the password toggle button
  },
];

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

export const RegistrationValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .trim('First name cannot be empty')
    .matches(
      /^[a-zA-Z0-9-]+$/,
      'This field cannot contain white space and special character'
    ),
  lastName: yup
    .string()
    .required('Last Name is required')
    .trim('Last name cannot be empty')
    .matches(
      /^[a-zA-Z0-9-]+$/,
      'This field cannot contain white space and special character'
    ),
  email: yup.string().required('Email is required').email('Email is invalid'),

  password: yup
    .string()
    .required('Password is required')
    .matches(
      passwordRules,
      'Password must have minimum 8 characters, at least one letter and one number'
    )
    .min(8, 'Password must be at least 8 characters'),

  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
