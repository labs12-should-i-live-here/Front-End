import { combineReducers } from "redux";
import { userReducer } from "./userReducer.js";
import { layersReducer } from "./layersReducer.js";

export default combineReducers({
  userReducer,
  layersReducer
});
