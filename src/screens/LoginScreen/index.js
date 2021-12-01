import { useFormik } from 'formik';
import React from 'react';
import LoginScreenComponent from './LoginScreenComponent';
import { loginSchema } from '../../utils/validationSchema';
import { Container } from '../../components';

const LoginScreen = ({ navigation }) => {
  //const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: { email: '', password: '', isRemember: false },
    onSubmit: value => {
      console.log(value);
    },
  });

  return (
    <Container>
      <LoginScreenComponent formik={formik} navigation={navigation} />
    </Container>
  );
};

export default LoginScreen;
