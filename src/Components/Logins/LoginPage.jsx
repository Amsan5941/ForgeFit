import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay">
      <div className="login-modal">
        <button className="close-button" onClick={() => navigate('/')}>
          ✖
        </button>
        <h1 className="LoginLogo">Login Page</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
