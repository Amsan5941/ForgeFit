import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebaseConfig.js'
import { ref, set } from 'firebase/database'; // <-- use set and ref for realtime db
import './Login.css';

const LoginButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function testConnection() {
      try {
        await set(ref(db, 'testConnection/'), {
          name: "Test User",
          createdAt: new Date().toISOString()
        });
        console.log("Data written successfully to Realtime Database!");
      } catch (e) {
        console.error("Error writing to database: ", e);
      }
    }

    testConnection();
  }, []);

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