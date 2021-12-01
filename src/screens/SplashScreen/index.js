import React, { useEffect, useState } from 'react';
import SplashScreenComponent from './SplashComponent';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 5000);
  }, []);
  return (
    <SplashScreenComponent
      isAuthenticated={isAuthenticated}
      isAppLoaded={isAppLoaded}
    />
  );
};

export default SplashScreen;
