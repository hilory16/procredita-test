import {combineReducers} from 'redux';
import Posts from './posts_reducer';
import User from './userReducer'
import Products from './product_reducer';
import Partner from './partner_reducer'
import Input from './inputReducer';
import Admin from './admin_reducer'
// import singlePost from './single_post_reducer';

const rootReducers = combineReducers({
    Posts,
    User,
    Products,
    Input,
    Partner,
    Admin
})

export default rootReducers;