import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './Redux/store';
import CountPage from './ui/pages/CountPage';

const App = () => {
  return (
    <Provider store={store}>
      <CountPage />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
