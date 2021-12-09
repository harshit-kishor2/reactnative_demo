import * as Yup from 'yup';

const validationSchema = {
  // ! Validation for login form
  loginSchema: Yup.object({
    username: Yup.string().required('Username required.'),
    password: Yup.string()
      .required('Password required.')
      .min(8, 'Password should be greater than 8 letters.'),
  }),
  // ! Validation for Register form
  registerSchema: Yup.object({
    username: Yup.string().required('Username required.'),
    password: Yup.string()
      .required('Password required.')
      .min(8, 'Password should be greater than 8 letters.'),
  }),
};
export default validationSchema;
