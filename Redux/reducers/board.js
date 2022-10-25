import { FETCH_ADD_ALL_BOARD } from "../type";

const initialState = []

const board=(state = initialState,action) => {
  switch (action.type) {

    case FETCH_ADD_ALL_BOARD:
    return action.payload

  default:
    return state
  }
}

export default board 