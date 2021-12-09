import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {countReducer} from './reducers/countReducer';

let rootReducers = combineReducers({
  countReducer,
});

const enhancer = applyMiddleware(thunk, logger);

const store = createStore(rootReducers, enhancer);

export default store;
