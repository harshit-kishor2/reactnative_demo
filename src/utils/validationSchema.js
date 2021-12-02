import * as Yup from 'yup';

// ! Validation for login form
export const loginSchema = Yup.object({
  username: Yup.string().required('Username required.'),
  password: Yup.string()
    .required('Password required.')
    .min(8, 'Password should be greater than 8 letters.'),
});

// ! Validation for Register form
export const RegisterationSchema = Yup.object({
  email: Yup.string().email('Invalid Email.').required('Email required.'),
  password: Yup.string()
    .required('Password required.')
    .min(8, 'Password should be greater than 8 letters.'),
  firstName: Yup.string().required('First Name required.'),
  lastName: Yup.string().required('Last Name required.'),
  userName: Yup.string().required('User Name required.'),
});

// ! Validation for Contact form
export const createContactSchema = Yup.object({
  country_code: Yup.string().required('Country Code required.'),
  first_name: Yup.string().required('First Name required.'),
  last_name: Yup.string().required('Last Name required.'),
  phone_number: Yup.string().required('Phone Number required.'),
});
