import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const naviagte = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Email === "admin@gmail.com" && password === "Zcon@123") {
      // Redirect to dashboard page upon successful login
      naviagte("/dashboard");
    } else {
      setErrorMessage("Invalid E-mail or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h2>User-Login</h2>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      <div>
        <label htmlFor="Email">E-mail:</label>
        <input
          type="text"
          id="Email"
          value={Email}
          onChange={handleEmailChange}
          className="form-control"
          placeholder="E-mail"
          required
        />
      </div>
      
      <div >
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
