export default function(state={loading:false}, action){
    switch(action.type){
        case "REGISTER_USER":
            return{...state, user:action.payload}

        case "LOGIN_USER":
            return{...state, user:action.payload}

        case "GET_AUTHENTICATED_USER":
            return{...state, user:action.payload}

        case "GET_ORDER_FOR_CUSTOMER":
            return{...state, get_order:action.payload}

        case "CHANGE_PASSWORD":
            return{...state, change_password:action.payload}

        default:
            return {...state};
    }
}