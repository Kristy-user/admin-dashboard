import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

const middleWare = [thunk];
const middleWareEnhancer = applyMiddleware(...middleWare);

const enhancers = [middleWareEnhancer];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers)
  : compose(...enhancers);

export const store = createStore(rootReducer, undefined, composeEnhancers);
