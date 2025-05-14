import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConfig.js'; 
import { ref, set, get, child } from 'firebase/database';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !repeatPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return;
    }

    const usersRef = ref(db, 'users');

    try {
      const snapshot = await get(child(usersRef, encodeEmail(email)));
      if (snapshot.exists()) {
        setError('User already exists.');
        return;
      }

      // Save the new user
      await set(child(usersRef, encodeEmail(email)), {
        name,
        email,
        password, // In a real app, hash passwords!
      });

      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error('Error registering user:', err);
      setError('Something went wrong. Please try again.');
    }
  };

const encodeEmail = (email) => {
    // Firebase keys can't contain ".", "#", "$", "[", or "]"
    return email.replace(/\./g, ',');
  };

  return (
    <div className='overlay'>
      <div className='login-modal'>
        <button className='close-button' onClick={() => navigate('/')}>✖</button>
        <h1 className='LoginLogo'>Register</h1>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <div className='mb-4'>
          <input type='text' placeholder='Your Name' className='input-field' value={name} onChange={e => setName(e.target.value)} />
          <input type='email' placeholder='Email' className='input-field' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='input-field' value={password} onChange={e => setPassword(e.target.value)} />
          <input type='password' placeholder='Repeat Password' className='input-field' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
        </div>

        <button className='login-button' onClick={handleRegister}>Register</button>

        <div className='mb-4'>
          Have an account?{' '}
          <span className='register-link' onClick={() => navigate('/login')}>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
