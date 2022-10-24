import { combineReducers } from "redux";
import auth from "./auth";
import board from "./board";
import spinner from "./spinner";

const reducres = combineReducers({
    auth,
    spinner,
    board
})


export default reducres