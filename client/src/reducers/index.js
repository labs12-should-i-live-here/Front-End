import { combineReducers } from "redux";
import { firstReducer } from "./firstReducer.js";
import { userReducer } from './userReducer.js';

export default combineReducers({
  userReducer,
  firstReducer
});

