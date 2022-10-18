import { combineReducers } from "redux";
import auth from "./auth";
import sprinner from "./sprinner";

const main = combineReducers({
  auth,
  sprinner,
});

export default main;
