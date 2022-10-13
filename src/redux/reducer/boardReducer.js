const initialState = [
  {
    name: "forhad",
    color: "hello",
    user: ["6347b35687a9c94af753debd"],
    _id: "6347c49987a9c94af753e7a2",
    createdAt: "2022-10-13T07:56:10.056Z",
    updatedAt: "2022-10-13T07:56:10.056Z",
    __v: 0,
  },
];

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_BOARD_FETCH":
      return action.payload

    default:
      return state;
  }
};

export default boardReducer;
