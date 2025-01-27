import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <div className="login-button-container">
      <button
        className="login-toggle-button"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
