import React, { useEffect, useState } from 'react';

import { apiUrl } from '../config';
import User from './user_index_item';

function UsersList (props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl + '/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  return (
    users.map((user) => <User key={user.id} user={user} />)
  );
}

export default UsersList;