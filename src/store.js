import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "reducers";
import thunk from "redux-thunk";

const storeFactory = () =>
  createStore(combineReducers(rootReducer), applyMiddleware(thunk));

export default storeFactory;
