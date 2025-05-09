import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginButton from './Components/Logins/LoginButton';
import LoginPage from './Components/Logins/LoginPage';
import Write from './Components/Write';
import RegisterPage from './Components/Logins/RegisterPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>


    </div>
  );
};

export default App;
