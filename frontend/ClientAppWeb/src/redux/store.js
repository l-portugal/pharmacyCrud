import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from "./appRedux";
import { pharmaciesReducer } from "./reducers/pharmacies/pharmaciesReducer";

const rootReducers = combineReducers({
  app: appReducer,
  pharmaciesReducer: pharmaciesReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
