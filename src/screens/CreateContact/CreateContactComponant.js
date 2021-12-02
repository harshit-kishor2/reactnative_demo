import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {
  KeyboardScrollView,
  Spacer,
  SubmitButton,
  TextField,
} from '../../components';
import { ImageConst } from '../../constants';

const CreateContactComponant = ({ formik, navigation }) => {
  const [code, setCode] = useState(null);
  const {
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
  } = formik;
  return (
    <KeyboardScrollView style={styles.container}>
      <View style={styles.box1}>
        <Image style={styles.imgStyle} source={ImageConst.LOGO} />
        <Text style={styles.welcomeText}>Welcome to MyContacts</Text>
        <Text style={styles.loginText}>Create new contact</Text>
      </View>
      <View style={styles.box2}>
        <TextField
          name="first_name"
          value={values.first_name}
          placeholder="Enter your first_name"
          autoCompleteType="first_name"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          error={errors.first_name}
          touch={touched.first_name}
        />
        <Spacer />
        <TextField
          name="last_name"
          value={values.last_name}
          placeholder="Enter your last_name"
          autoCompleteType="last_name"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          error={errors.last_name}
          touch={touched.last_name}
        />
        <Spacer />
        <TextField
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={code}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setCode(cCode);
                setFieldValue('country_code', phoneCode);
              }}
            />
          }
          iconPosition="left"
          name="phone_number"
          value={values.phone_number}
          placeholder="Enter your phone_number"
          autoCompleteType="phone_number"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('phone_number')}
          onBlur={handleBlur('phone_number')}
          error={errors.phone_number || errors.country_code}
          touch={touched.phone_number}
        />
        <Spacer height={10} />
        <SubmitButton label="Create" onPress={handleSubmit} />
      </View>
    </KeyboardScrollView>
  );
};

export default CreateContactComponant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logintext: {
    fontSize: 16,
  },
  box2: {
    marginBottom: 40,
  },
  inputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  imgStyle: {
    height: 150,
    width: 150,
  },
  registerText: {
    color: '#00447D87',
    fontSize: 15,
    marginLeft: 15,
  },
  registerRow: {
    flexDirection: 'row',
    padding: 10,
  },
});
