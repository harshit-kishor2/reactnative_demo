import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../../navigation/SideMenu/rootNavigator';
import DrawerNavigator from '../../navigation/DrawerNavigator';
import AuthNavigator from '../../navigation/AuthNavigator';

const SplashScreenComponent = ({ isAuthenticated, isAppLoaded }) => {
  return isAppLoaded ? (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2340090',
  },
  text: {
    color: 'blue',
    fontSize: 25,
  },
});
