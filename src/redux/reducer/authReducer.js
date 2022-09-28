
const initialState = {
    token:""
  };
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TOKEN":
        return action.payload;
      default:
        return state;
    }
  };


  export default   authReducer