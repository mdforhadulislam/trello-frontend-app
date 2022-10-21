const initialState =  {
    token :""
};

const  auth = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AUTH_TOKEN':
            return action.payload

        case 'REMOVE_AUTH_TOKEN':
            return action.payload
            
        default:
            return state;
    }
};


export default auth