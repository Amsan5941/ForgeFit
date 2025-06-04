import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConfig.js';
import { ref, get, child } from 'firebase/database';
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const encodeEmail = (email) => email.replace(/\./g, ',');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    const usersRef = ref(db, 'users');

    try {
      const userSnapshot = await get(child(usersRef, encodeEmail(email)));

      if (!userSnapshot.exists()) {
        setError('User not found.');
        return;
      }

      const userData = userSnapshot.val();

      if (userData.password !== password) {
        setError('Incorrect password.');
        return;
      }

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', userData.name);

      setError('');
      setSuccessMessage(`Welcome back, ${userData.name}! 🎉`);

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="overlay">
      <div className="login-modal">
        <button className="close-button" onClick={() => navigate('/')}>✖</button>
        <h1 className="LoginLogo">Sign In Page</h1>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        {successMessage ? (
          <div style={{ color: 'green', fontSize: '20px', marginBottom: '20px' }}>
            {successMessage}
          </div>
        ) : (
          <>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="login-button" onClick={handleLogin}>Sign In</button>

            <div className="mb-4">
              Don't have an account?{' '}
              <span className="register-link" onClick={() => navigate('/register')}>
                Register
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
