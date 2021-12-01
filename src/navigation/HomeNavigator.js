import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screen from '../screens';
import {RouteName} from '../constants';
import {NavigationContainer} from '@react-navigation/native';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  //For animation
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    headerShown: false,
    cardStyleInterpolator: ({current, layouts}) => {
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
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={horizontalAnimation}
        initialRouteName={RouteName.DASHBOARD}>
        <HomeStack.Screen
          name={RouteName.DASHBOARD}
          component={Screen.DashboardScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
