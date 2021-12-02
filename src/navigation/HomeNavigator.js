import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from '../screens';
import { RouteName } from '../constants';
import { Icons } from '../components';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  //For animation
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    headerShown: true,
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <HomeStack.Navigator
      screenOptions={horizontalAnimation}
      initialRouteName={RouteName.DASHBOARD}>
      <HomeStack.Screen
        name={RouteName.DASHBOARD}
        component={Screen.DashboardScreen}
      />
      <HomeStack.Screen
        name={RouteName.CREATE_CONTACT}
        component={Screen.CreateContact}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
