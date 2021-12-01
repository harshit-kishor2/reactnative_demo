import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import SplashScreen from './screens/SplashScreen';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};

export default App;
