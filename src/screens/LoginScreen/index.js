import { useFormik } from 'formik';
import React from 'react';
import LoginScreenComponent from './LoginScreenComponent';
import { loginSchema } from '../../utils/validationSchema';
import { Container } from '../../components';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { RouteName } from '../../constants';
import { loginAction } from '../../redux/auth.slice';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: { username: '', password: '', isRemember: false },
    onSubmit: value => {
      let data = {
        username: value.username,
        password: value.password,
      };
      dispatch(loginAction(data)).then(res => {
        if (res.type === 'auth/loginAction/rejected') {
          Toast.show('Some Error Occured.');
        }
      });
    },
  });

  return (
    <Container>
      <LoginScreenComponent formik={formik} navigation={navigation} />
    </Container>
  );
};

export default LoginScreen;
