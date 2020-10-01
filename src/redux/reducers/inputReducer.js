

const inputReducer = (state = {fullname: ''}, action) => {
    switch (action.type) {
        case "HANDLE_INPUT_NAME":
            return {...state, fullname: action.payload};
        // case DECREMENT_COUNTER:
        //     return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default inputReducer;