import React, { useEffect } from 'react';
import { fetchAllUsers } from '../actions/user_actions';
import UserIndexItem from './user_index_item';
import { useDispatch, useSelector } from 'react-redux';

function UsersList (props) {
  const users = useSelector( state => Object.values(state.users) );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(await fetchAllUsers());
    }
    fetchData();
  }, [dispatch]);

  if (!users) return null;
  const userIndexItems = users.map( user => <UserIndexItem key={user.id} user={user}/> )
  console.log(users);
  return (
    <>
     { userIndexItems }
    </>
  );
}

export default UsersList;