import axios from 'axios';
import { navigate } from '../navigation/SideMenu/rootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteName } from '../constants';
import { BASE_URL } from './config';

const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

//All response from axios
axiosRequest.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log('Error=======>', error.response.data);
    if (error.response) {
      if (error.response.status === 403) {
        navigate(RouteName.LOGOUT, { tokenExpired: true });
      } else {
        return new Promise((resolve, reject) => {
          reject(error.response);
        });
      }
    }
    return Promise.reject(error);
  },
);

// All request from axios
axiosRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosRequest;
