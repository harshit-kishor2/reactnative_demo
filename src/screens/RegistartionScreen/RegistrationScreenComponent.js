import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  KeyboardScrollView,
  Spacer,
  SubmitButton,
  TextField,
} from '../../components';
import { ImageConst, RouteName } from '../../constants';

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
        <TextField
          name="userName"
          placeholder="Enter your username"
          autoCompleteType="userName"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('userName')}
          onBlur={handleBlur('userName')}
          error={errors.userName}
          touch={touched.userName}
        />
        <Spacer />
        <TextField
          name="firstName"
          placeholder="Enter your firstname"
          autoCompleteType="firstName"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          error={errors.firstName}
          touch={touched.firstName}
        />
        <Spacer />
        <TextField
          name="lastName"
          placeholder="Enter your lastname"
          autoCompleteType="lastName"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          error={errors.lastName}
          touch={touched.lastName}
        />
        <Spacer />
        <TextField
          name="email"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touch={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
        <Spacer />
        <TextField
          refKey={password}
          name="password"
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touch={touched.password}
        />

        <Spacer height={10} />
        <SubmitButton label="Register" onPress={handleSubmit} />
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
