import React, { useState } from "react";
import { Validation } from "./Validation";
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; 
import { login } from "../../services/authService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = Validation(username, password);
    setError(errors);
    if (isValid) {
      const user = await login(username, password);

      if (user) {
        alert("Successfully logged in");
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/menu');
        }
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="header">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="user-input">
            <label>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Enter username"
              onChange={handleUsername}
            />
            {error.username && <p>{error.username}</p>}
          </div>
          <div className="pass-input">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={handlePassword}
            />
            {error.password && <p>{error.password}</p>}
          </div>
          <button className="btn">Login</button>
          <div className="footer">
            <a href="#">Forget password?</a>
            <p>
              don't have an account <a href="#"> sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
