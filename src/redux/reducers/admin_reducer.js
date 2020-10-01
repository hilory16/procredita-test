export default function(state={}, action){
    switch(action.type){
        case "ADMIN_GET_ALL_USERS":
        return{...state, adminAllUsers:action.payload}

        case "ADMIN_DEACTIVATE_USER":
        return{...state, adminDeactivateUser:action.payload}

        case "ADMIN_GET_ALL_PARTNERS":
        return{...state, adminAllPartners:action.payload}

        case "ADMIN_GET_ALL_DISCOUNTS":
        return{...state, adminAllDiscounts:action.payload}

        default:
            return state
    }
}
