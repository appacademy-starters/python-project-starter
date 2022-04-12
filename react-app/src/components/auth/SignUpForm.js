import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <Form onSubmit={onSignUp} className="rounded p-4 p-sm-3">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <Form.Group className="mb-3" controlID="formEmail">
          <Form.Label>
            Email Address: 
          </Form.Label>
          <Form.Control
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlID="formPassword">
          <Form.Label>
            Password: 
          </Form.Label>
          <Form.Control
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlID="formRepeatPassword">
          <Form.Label>
            Repeat Password
          </Form.Label>
          <Form.Control
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
        </Form.Group>
        <Button variant="dark" type='submit' >Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
