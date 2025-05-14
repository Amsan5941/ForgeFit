import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebaseConfig.js'
import { ref, set } from 'firebase/database'; // <-- use set and ref for realtime db
import './Login.css';


const LoginButton = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() =>{
    const storedName = localStorage.getItem('userName');
    if (storedName){
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');

    setUserName('');
    navigate('/')
  }
  
  return (
    <div className="login-button-container">
      {userName ? (
        // If user is logged in, show welcome message and logout button
        <div className="user-info">
          <span className="welcome-text">Welcome, {userName}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        // If no user is logged in, show the "Sign In" button
        <button className="login-toggle-button" onClick={() => navigate('/login')}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default LoginButton;