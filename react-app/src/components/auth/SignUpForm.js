import React, { useState } from "react";
import { signUp } from '../../services/auth';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrorMessage('');
      signUp(email, password);
    } else {
      setErrorMessage('Passwords must match.');
    }
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

  return (
    <form onSubmit={onSignUp}>
      <div className='errorMessage'>
        { errorMessage }
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
