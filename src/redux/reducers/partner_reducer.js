export default function(state={}, action){
    switch(action.type){
        case "REGISTER_PARTNER":
        return{...state, partner:action.payload}

        case "LOGIN_PARTNER":
        return{...state, partner:action.payload}


        case "GET_AUTHENTICATED_PARTNER":
        return{...state, partner:action.payload}

        case "CREATE_DISCOUNT":
        return{...state, discount_create:action.payload}

        case "GET_DISCOUNT":
        return{...state, get_discount:action.payload}

        case "DELETE_DISCOUNT":
        return{...state, discount_delete:action.payload}

        case "UPDATE_DISCOUNT":
        return{...state, discount_update:action.payload}

        case "GET_ALL_DISCOUNTS_PROTECTED":
        return{...state, discounts:action.payload}

        case "UPDATE_PARTNER_DETAILS":
        return{...state, partner_updated:action.payload}

        case "CHANGE_PARTNER_PASSWORD":
            return{...state, password_changed:action.payload}

        case "RESEND_ACTIVATION_CODE":
            return{...state, activation_code:action.payload}
            
        case "VERIFY_ACTIVATION_CODE":
            return{...state, verify_activation_code:action.payload}
    

        default: return state
    }
}