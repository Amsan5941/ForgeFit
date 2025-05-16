import React, { useState } from 'react'; // Import React and useState for managing form state
import { useNavigate } from 'react-router-dom'; // useNavigate to move between pages
import { db } from '../../firebaseConfig.js'; // Your Firebase Realtime Database connection
import { ref, get, child } from 'firebase/database'; // Firebase functions to read data
import './Login.css'; // CSS for styling

const LoginPage = () => {
  const navigate = useNavigate(); // Setup navigation
  const [email, setEmail] = useState(''); // Store user's email input
  const [password, setPassword] = useState(''); // Store user's password input
  const [error, setError] = useState(''); // Error message if something goes wrong
  const [successMessage, setSuccessMessage] = useState(''); // Message when login is successful

  // Helper function to replace '.' in email (Firebase can't store keys with ".")
  const encodeEmail = (email) => {
    return email.replace(/\./g, ',');
  };

  // Handle when user clicks "Sign In" button
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter email and password.');
      return; // Stop if fields are empty
    }

    // Reference the 'users' part of the database
    const usersRef = ref(db, 'users');

    try {
      // Try to get the user based on their encoded email
      const userSnapshot = await get(child(usersRef, encodeEmail(email)));

      if (!userSnapshot.exists()) {
        setError('User not found.');
        return; // Stop if no user exists
      }

      const userData = userSnapshot.val(); // Get user data (name, email, password)

      if (userData.password !== password) {
        setError('Incorrect password.');
        return; // Stop if password is wrong
      }

      // Save user email and name into localStorage (used later on other pages)
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', userData.name);

      setError(''); // Clear any old error
      setSuccessMessage(`Welcome back, ${userData.name}! 🎉`); // Show success message

      // After 2.5 seconds, navigate to the tracker page
      setTimeout(() => {
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, 100); // Small delay to ensure navigation happens first
    }, 2500);
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="overlay">
      <div className="login-modal">
        {/* Close button to go back to Home page */}
        <button className="close-button" onClick={() => navigate('/')}>
          ✖
        </button>

        {/* Title */}
        <h1 className="LoginLogo">Sign In Page</h1>

        {/* Show error message if there is one */}
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        {/* If login is successful, show the success message */}
        {successMessage ? (
          <div style={{ color: 'green', fontSize: '20px', marginBottom: '20px' }}>
            {successMessage}
          </div>
        ) : (
          // Otherwise, show the login form
          <>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state as user types
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state as user types
              />
            </div>

            {/* Button to trigger login */}
            <button className="login-button" onClick={handleLogin}>
              Sign In
            </button>

            {/* Link to go to Register page */}
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

export default LoginPage; // Export the component so you can use it in routes
