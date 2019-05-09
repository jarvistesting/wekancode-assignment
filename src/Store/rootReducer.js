import LoginReducer from './LoginReducer';
import {viewReducer} from './crudReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginData: LoginReducer,
    horseData: viewReducer
})

export default rootReducer;