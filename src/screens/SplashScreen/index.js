import React, { useEffect, useState } from 'react';
import SplashScreenComponent from './SplashComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const SplashScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const { isLoggedin } = useSelector(state => state.authReducer);

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUser();
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 2000);
  }, [isLoggedin]);
  return (
    <SplashScreenComponent
      isAuthenticated={isAuthenticated}
      isAppLoaded={isAppLoaded}
    />
  );
};

export default SplashScreen;
