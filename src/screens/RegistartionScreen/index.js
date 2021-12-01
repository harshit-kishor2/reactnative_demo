import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components';
import routesName from '../../constants/routesName';
import { registerAction } from '../../redux/auth.slice';
import { RegisterationSchema } from '../../utils/validationSchema';
import RegistrationScreenComponent from './RegistrationScreenComponent';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { registerLoadingStatus, registerError } = useSelector(
    state => state.authReducer,
  );

  const formik = useFormik({
    validationSchema: RegisterationSchema,
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userName: '',
    },
    onSubmit: value => {
      let data = {
        username: value.userName,
        first_name: value.firstName,
        last_name: value.lastName,
        email: value.email,
        password: value.password,
      };
      dispatch(registerAction(data)).then(res => {
        if (res.type === 'auth/registerAction/rejected') {
          Toast.show('Some Error Occured.');
        } else {
          navigation.navigate(routesName.LOGIN);
        }
      });
    },
  });

  return (
    <Container>
      <RegistrationScreenComponent formik={formik} navigation={navigation} />
    </Container>
  );
};

export default RegisterScreen;
