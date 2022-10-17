import { combineReducers } from "redux"
import auth from "./auth"

const main = combineReducers({
  auth,
})

export default main