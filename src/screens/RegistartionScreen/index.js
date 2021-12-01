import { useFormik } from 'formik';
import React from 'react';
import RegistrationScreenComponent from './RegistrationScreenComponent';
import { RegisterationSchema } from '../../utils/validationSchema';
import { Container } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../redux/auth.slice';
import { RouteName } from '../../constants';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { registerLoadingStatus, registerError } = useSelector(
    state => state.authReducer,
  );
  console.log('REDUX==>', { registerLoadingStatus, registerError });

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
      console.log(value);
      let data = {
        username: value.userName,
        first_name: value.firstName,
        last_name: value.lastName,
        email: value.email,
        password: value.password,
      };
      dispatch(registerAction(data));
    },
  });
  if (registerLoadingStatus === 'loaded') {
    navigation.navigate(RouteName.LOGIN);
    //Redirect
  } else {
    <Container>
      <RegistrationScreenComponent formik={formik} navigation={navigation} />
    </Container>;
  }
};

export default RegisterScreen;
