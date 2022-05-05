import { combineReducers } from 'redux';
import user from './user';
import { pharmaciesReducer } from "./../reducers/pharmaciesReducer";

export const rootReducer = combineReducers({
  user: user,
  pharmaciesReducer: pharmaciesReducer
})