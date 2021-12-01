import React, { useRef } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImageConst, RouteName } from '../../constants';
import {
  SubmitButton,
  ErrorLabel,
  Spacer,
  KeyboardScrollView,
} from '../../components';
// import Toast from 'react-native-simple-toast';

const RegistrationScreenComponent = ({ formik, navigation }) => {
  const password = useRef(null);
  const { handleChange, handleBlur, errors, touched, handleSubmit } = formik;
  return (
    <KeyboardScrollView style={styles.container}>
      <View style={styles.box1}>
        <Image style={styles.imgStyle} source={ImageConst.LOGO} />
        <Text style={styles.welcomeText}>Welcome to MyContacts</Text>
        <Text style={styles.loginText}>Create a free account</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          style={styles.inputStyle}
          name="userName"
          placeholder="Enter your username"
          autoCompleteType="userName"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('userName')}
          onBlur={handleBlur('userName')}
          error={errors.userName}
          touch={touched.userName}
        />
        {errors.userName && touched.userName ? (
          <ErrorLabel msg={errors.userName} />
        ) : null}
        <Spacer />
        <TextInput
          style={styles.inputStyle}
          name="firstName"
          placeholder="Enter your firstname"
          autoCompleteType="firstName"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          error={errors.firstName}
          touch={touched.firstName}
        />
        {errors.firstName && touched.firstName ? (
          <ErrorLabel msg={errors.firstName} />
        ) : null}
        <Spacer />
        <TextInput
          style={styles.inputStyle}
          name="lastName"
          placeholder="Enter your lastname"
          autoCompleteType="lastName"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          error={errors.lastName}
          touch={touched.lastName}
        />
        {errors.lastName && touched.lastName ? (
          <ErrorLabel msg={errors.lastName} />
        ) : null}
        <Spacer />
        <TextInput
          style={styles.inputStyle}
          name="email"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touch={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
        {errors.email && touched.email ? (
          <ErrorLabel msg={errors.email} />
        ) : null}
        <Spacer />
        <TextInput
          ref={password}
          style={styles.inputStyle}
          name="password"
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touch={touched.password}
        />
        {errors.password && touched.password ? (
          <ErrorLabel msg={errors.password} />
        ) : null}
        <Spacer height={10} />
        <SubmitButton
          // disabled={!isValid}
          label="Register"
          onPress={handleSubmit}
        />
        <Spacer />
        <View style={styles.registerRow}>
          <Text>Already have account ? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.LOGIN)}>
            <Text style={styles.registerText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardScrollView>
  );
};

export default RegistrationScreenComponent;

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
