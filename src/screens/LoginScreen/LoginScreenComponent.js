import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  Checkbox,
  KeyboardScrollView,
  Spacer,
  SubmitButton,
  TextField,
} from '../../components';
import { ImageConst, RouteName } from '../../constants';
import { hp } from '../../utils/utils';

const LoginScreenComponent = ({ formik, navigation }) => {
  const password = useRef(null);
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    // isValid,
    setFieldValue,
    handleSubmit,
  } = formik;
  return (
    <KeyboardScrollView style={styles.container}>
      <View style={styles.box1}>
        <Image style={styles.imgStyle} source={ImageConst.LOGO} />
        <Text style={styles.welcomeText}>Welcome to MyContacts</Text>
        <Text style={styles.loginText}>Please Login Here</Text>
      </View>
      <View style={styles.box2}>
        <TextField
          style={styles.inputStyle}
          name="username"
          placeholder="Enter your username"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          touch={touched.username}
          onSubmitEditing={() => password.current?.focus()}
        />
        <Spacer height={10} />
        <TextField
          refKey={password}
          style={styles.inputStyle}
          name="password"
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touch={touched.password}
        />
        <Spacer height={10} />
        <Checkbox
          value={values?.isRemember}
          onValueChange={newValue => setFieldValue('isRemember', newValue)}
          // style={styles.checkbox}
          label={'Remeber me?'}
        />
        <Spacer height={10} />
        <SubmitButton
          //disabled={!isValid}
          label="Login"
          onPress={handleSubmit}
        />
        <Spacer height={10} />
        <View style={styles.registerRow}>
          <Text>Need a new account ? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.REGISTRATION)}>
            <Text style={styles.registerText}>Registartion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardScrollView>
  );
};

export default LoginScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(100),
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(40),
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
    height: hp(60),
    marginVertical: 20,
  },
  inputStyle: {
    //borderBottomWidth: 1,
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
