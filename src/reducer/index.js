import { combineReducers } from "redux";
import postReducer from "./postReducer/postReducer";

export default combineReducers({
  post: postReducer
})