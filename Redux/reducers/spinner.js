const initialState = false

const spinner = (state = initialState, action) => {
    switch (action.type) {
        case 'RUN_SPINNER':
            return state = true
        case 'STOP_SPINNER':
            return state = false
        default:
            return state;
    }
};

export default spinner;
