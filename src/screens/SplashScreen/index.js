import React, { useEffect, useState } from 'react';
import SplashScreenComponent from './SplashComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAction } from '../../redux/auth.slice';

const SplashScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const { isLoggedin } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  /*   const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      const isRemember = await AsyncStorage.getItem('@isRemember');
      if (token && isRemember) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  }; */

  useEffect(() => {
    dispatch(checkAuthAction());
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 4000);
  }, [isLoggedin]);
  return (
    <SplashScreenComponent
      isAuthenticated={isLoggedin}
      isAppLoaded={isAppLoaded}
    />
  );
};

export default SplashScreen;
