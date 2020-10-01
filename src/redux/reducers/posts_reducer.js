export default function(state={}, action){

    switch(action.type){
        case "GET_ALL_POSTS":
            return{...state, posts:action.payload}

        case "GET_SINGLE_POST":
            return {...state, post:action.payload}

        case "CLEAR_POST_DETAIL":
            return {...state, post:action.payload}

        case "INCREMENT_COUNTER":
            return {...state, count:action.payload}

        default:
            return state
    }
}