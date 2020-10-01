export default function(state={}, action){
    switch(action.type){
        case "GET_ALL_PRODUCTS":
            return{...state, products: action.payload}

        case "GET_SINGLE_PRODUCT":
            return{...state, product: action.payload}

        case "GET_ALL_REVIEWS":
            return{...state, reviews: action.payload}

        case "GET_ALL_CATEGORIES":
            return{...state, categories: action.payload}

        case "ADD_TO_CART":
            return{...state, cart: action.payload}

        case "REMOVE_FROM_CART":
            return{...state, cart: action.payload}
            
        case "MODIFY_ITEM_NUMBER":
            return{...state, cart: action.payload}
            
        case "PLACE_ORDER":
            return{...state, place_order:action.payload}
            
        default:
            return state;
    }
}