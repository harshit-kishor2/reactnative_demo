import { useFormik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components';
import { createContactSchema } from '../../utils/validationSchema';
import CreateContactComponant from './CreateContactComponant';
import { createContactAction } from '../../redux/contact.slice';
import Toast from 'react-native-simple-toast';
import routesName from '../../constants/routesName';

const CreateContact = ({ navigation }) => {
  const dispatch = useDispatch();
  const { createContactLoadingStatus, createContactError } = useSelector(
    state => state.contactReducer,
  );

  const formik = useFormik({
    validationSchema: createContactSchema,
    initialValues: {
      country_code: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      is_favorite: false,
    },
    onSubmit: (value, { resetForm }) => {
      dispatch(createContactAction(value)).then(res => {
        if (res.type === 'auth/createContactAction/rejected') {
          Toast.show('Some Error Occured.');
        } else {
          resetForm();
          navigation.navigate(routesName.DASHBOARD);
        }
      });
    },
  });
  return (
    <Container>
      <CreateContactComponant formik={formik} navigation={navigation} />
    </Container>
  );
};

export default CreateContact;
