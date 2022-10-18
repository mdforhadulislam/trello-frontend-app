import { SPRINNER_RUN, SPRINNER_STOP } from "../type";

const initialState = {
  sprinner: false,
};

const sprinner = (state = initialState, action) => {
  switch (action.type) {
    case SPRINNER_RUN:
      return {
        sprinner: true,
      };

    case SPRINNER_STOP:
      return {
        sprinner: false,
      };

    default:
      return state;
  }
};

export default sprinner;
