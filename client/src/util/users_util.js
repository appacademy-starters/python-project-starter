import { usersApiUrl } from '../config'; 

export const fetchAllUsers = async () => {
  const response = await fetch(`${usersApiUrl}/`);
  const users = await response.json();
  return users;
};