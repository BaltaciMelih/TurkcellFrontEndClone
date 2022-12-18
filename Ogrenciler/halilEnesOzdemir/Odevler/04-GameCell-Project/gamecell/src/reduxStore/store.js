import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import filtersReducer from './filter';
import gameReducer from './games';

let initialState = {};

const rootReducer = combineReducers({
  filters: filtersReducer,
  gameReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
