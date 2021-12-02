import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { RouteName } from '../constants';
import SideMenu from './SideMenu';

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({ navigation }) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={RouteName.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
