import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './redux/auth.slice';
import { contactReducer } from './redux/contact.slice';
import logger from 'redux-logger';

const rootReducers = {
  authReducer,
  contactReducer,
};

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: rootReducers,
});

//const store = createStore(rootReducers, enhancer);
