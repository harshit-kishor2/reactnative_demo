import * as Yup from 'yup';

// ! Validation for login form
export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid Email.').required('Email required.'),
  password: Yup.string()
    .required('Password required.')
    .min(5, 'Password should be greater than 5 letters.'),
});

// ! Validation for Register form
export const RegisterationSchema = Yup.object({
  email: Yup.string().email('Invalid Email.').required('Email required.'),
  password: Yup.string()
    .required('Password required.')
    .min(5, 'Password should be greater than 5 letters.'),
  firstName: Yup.string().required('First Name required.'),
  lastName: Yup.string().required('Last Name required.'),
  userName: Yup.string().required('User Name required.'),
});
