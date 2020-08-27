import { RECEIVE_ALL_USERS } from '../actions/user_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign(newState, action.users);
    default:
      return oldState;
  }
};