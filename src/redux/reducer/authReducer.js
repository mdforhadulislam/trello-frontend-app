const initialState = {
  token: "",
  spring: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...initialState,
        ...action.payload,
      };
    case "SPRING_RUN":
      return {
        ...initialState,
        spring: true,
      };

    case "SPRING_STOP":
      return {
        ...initialState,
        spring: false,
      };
    default:
      return state;
  }
};

export default authReducer;
