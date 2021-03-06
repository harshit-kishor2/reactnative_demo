import React, { useEffect, useState } from 'react';
import SplashScreenComponent from './SplashComponent';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAction } from '../../redux/auth.slice';

const SplashScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedin);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const { isLoggedin } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  /*   const getUser = async () => {
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
  }; */

  useEffect(() => {
    //getUser();
    dispatch(checkAuthAction()).then(res => {
      setIsAuthenticated(isLoggedin);
    });
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 4000);
  }, [dispatch, isLoggedin]);
  return (
    <SplashScreenComponent
      isAuthenticated={isAuthenticated}
      isAppLoaded={isAppLoaded}
    />
  );
};

export default SplashScreen;
