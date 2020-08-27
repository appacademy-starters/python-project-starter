import * as UsersApiUtil from '../util/users_util';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (payload) => ({
  type: RECEIVE_ALL_USERS,
  users: payload.users,
});

export const fetchAllUsers = () => async dispatch => {
  const payload = await UsersApiUtil.fetchAllUsers();
  return dispatch(receiveAllUsers(payload));
};