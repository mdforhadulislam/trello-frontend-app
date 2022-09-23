
const initialState = {
    token:""
  };
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TOKEN":
        return action.payload;
  
      case "delete":
        return {
          ...state,
          numOfItems: state.numOfItems - 1,
        };
      default:
        return state;
    }
  };


  export default   authReducer