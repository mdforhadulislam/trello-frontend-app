const initialState = []

const list = (state = initialState, action) => {
  switch (action.type) {

  case "FETCH_ADD_ALL_LISTS":
    return action.payload

  default:
    return state
  }
}

export default list