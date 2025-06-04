import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginButton = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setUserName('');
    window.location.href = '/';
  };

  return (
    <div className="login-button-container">
      {userName ? (
        <div className="user-info">
          <span className="welcome-text">Welcome, {userName}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="login-toggle-button" onClick={() => navigate('/login')}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default LoginButton;
