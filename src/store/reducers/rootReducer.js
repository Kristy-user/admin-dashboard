import { combineReducers } from 'redux';
import { cardsReducer } from '../reducers/cardsReducer';

const rootReducer = combineReducers({
  cardsReducer,
});

export default rootReducer;
