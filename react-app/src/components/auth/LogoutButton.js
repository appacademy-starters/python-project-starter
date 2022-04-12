import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <Button variant="dark" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
