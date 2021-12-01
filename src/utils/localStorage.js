import {AsyncStorage} from '@react-native-async-storage/async-storage';

const localStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
      AsyncStorage.setItem(key, JSON.stringify(value), err => {
        if (err) {
          console.log('err', err);
        }
      });
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
      AsyncStorage.getItem(key, (error, result) => {
        if (error) {
          return error;
        }
        return result;
      });
    });
  },
  removeItem: function (key) {
    return Promise.resolve().then(function () {
      AsyncStorage.removeItem(key, error => {
        if (error) {
          return error;
        }
      });
    });
  },
};

export default localStorage;
