import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import users from './users';

const reducers = combineReducers({
    routing:routerReducer,
    users: users
});

export default reducers