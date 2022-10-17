import { ADD_TOKEN, REMOVE_TOKEN } from "../type"

const initialState = {
token:""
}

const auth =(state = initialState, action) => {
  switch (action.type) {

    case ADD_TOKEN:
        return {
            token: action.payload
        }
    case REMOVE_TOKEN:
        return {
            token: ""
        }

  default:
    return state
  }
}


export default auth

