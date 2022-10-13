import { combineReducers } from "redux";
import authReducer from "./authReducer";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    board:boardReducer,
    list:{},
    task:{}
})

export default rootReducer;












