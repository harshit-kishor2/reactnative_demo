/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { Container } from '../../components';
import { loginAction } from '../../redux/auth.slice';
import { loginSchema } from '../../utils/validationSchema';
import LoginScreenComponent from './LoginScreenComponent';
import { useIsFocused } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: { username: '', password: '', isRemember: false },
    onSubmit: (value, { resetForm }) => {
      let data = {
        username: value.username,
        password: value.password,
      };
      dispatch(loginAction(data)).then(res => {
        if (res.type === 'auth/loginAction/rejected') {
          Toast.show('Some Error Occured.');
        }
        resetForm();
      });
    },
  });

  useEffect(() => {
    if (isFocused) {
      formik.resetForm();
    }
  }, [isFocused]);

  return (
    <Container>
      <LoginScreenComponent formik={formik} navigation={navigation} />
    </Container>
  );
};

export default LoginScreen;
