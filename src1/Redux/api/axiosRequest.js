import axios from 'axios';
import {BASE_URL} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

//All response from axios
axiosRequest.interceptors.response.use(
  response => {
    console.log('Response=======>', response);
    return response.data;
  },
  error => {
    console.log('Error=======>', error.response?.data);
    if (error.response) {
      if (error.response.status === 403) {
        //navigate(RouteName.LOGOUT, { tokenExpired: true });
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
  async request => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosRequest;
