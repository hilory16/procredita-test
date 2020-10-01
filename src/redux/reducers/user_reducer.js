export default function(state={}, action){
    switch(action.type){
        case "REGISTER_USER":
            return{...state, user:action.payload}
        
        case "LOGIN_USER":
            return{...state, user:action.payload}

        case "GET_AUTHENTICATED_USER":
            return{...state, user:action.payload}

        case "RESEND_ACTIVATION_CODE":
            return{...state, activation_code:action.payload}

        case "VERIFY_ACTIVATION_CODE":
            return{...state, verify_activation_code:action.payload}

        case "CHANGE_USER_PASSWORD":
            return{...state, user_password:action.payload}
        default:
            return state
    }
}
