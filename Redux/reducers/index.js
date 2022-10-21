import { combineReducers } from "redux";
import auth from "./auth";
import spinner from "./spinner";

const reducres = combineReducers({
    auth,
    spinner
})


export default reducres