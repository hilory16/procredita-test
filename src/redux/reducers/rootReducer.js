import counterReducer from './counterReducer';
import User from './userReducer'
import inputReducer from './inputReducer';
import Products from './product_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    User,
    Products,
    fullname:inputReducer

});

export default rootReducer;