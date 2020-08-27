import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

export default combineReducers({
  users: UsersReducer
});