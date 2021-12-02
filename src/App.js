import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SplashScreen from './screens/SplashScreen';

//const allStore = store();
const App = () => {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};

export default App;
