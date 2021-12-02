import { combineReducers } from 'redux';

import { authReducer } from './auth.slice';
import { contactReducer } from './contact.slice';
/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  authReducer,
  contactReducer,
});

export default rootReducer;
