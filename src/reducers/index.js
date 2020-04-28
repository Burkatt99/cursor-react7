import { combineReducers } from "redux";
import todoUser from "./todoUser";

export default combineReducers({
  todo: todoUser,
});
