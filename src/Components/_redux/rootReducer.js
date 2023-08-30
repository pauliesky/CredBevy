import { combineReducers } from "redux";
import { calReducer } from "./reducers";

const rootReducer = combineReducers({
  calReducer,
});

export default rootReducer;
