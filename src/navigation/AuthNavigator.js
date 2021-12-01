import React from 'react';
import { RouteName } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteName.LOGIN}>
      <AuthStack.Screen
        name={RouteName.LOGIN}
        component={Screens.LoginScreen}
      />
      <AuthStack.Screen
        name={RouteName.REGISTRATION}
        component={Screens.RegisterScreen}
      />
      <AuthStack.Screen
        name={RouteName.HOME_NAVIGATOR}
        component={Screens.DashboardScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
