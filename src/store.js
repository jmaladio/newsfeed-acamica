import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// utilidad para ver las acciones realizadas
// const logger = (store) => (next) => (action) => {
//   let result;
//   console.groupCollapsed("despachando", action.type);
//   console.log("state previo: ", store.getState());
//   console.log("accion: ", action);
//   result = next(action);
//   console.log("proximo estado: ", store.getState());
//   console.groupEnd();
//   return result;
// };

const storeFactory = () =>
  createStore(combineReducers(rootReducer), applyMiddleware(thunk));

export default storeFactory;
