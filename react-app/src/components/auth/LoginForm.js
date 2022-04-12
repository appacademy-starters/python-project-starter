import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <Form onSubmit={onLogin} className="rounded p-4 p-sm-3">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <Form.Group className="mb-3" controlID="formEmail">
          <Form.Label >
            Email:
          </Form.Label>
          <Form.Control  
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlID="formPassword">
          <Form.Label >
            Password: 
          </Form.Label >
          <Form.Control  
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </Form.Group>
          <NavLink to="/profile/user/">
            <Button variant="dark" type='submit' >
              login
            </Button>
          </NavLink>
      </Form>
    </div>
  );
};

export default LoginForm;
