import { combineReducers } from "redux";
import auth from "./auth";
import board from "./board";
import list from "./List";
import spinner from "./spinner";

const reducres = combineReducers({
    auth,
    spinner,
    board,
    list
})


export default reducres